#include <windows.h>
#include <stdio.h>
#include <string.h>
#include <tchar.h>

/*
 * This just runs 'Element.exe' with the same args as
 * this process was invoked with. This gets around the fact that
 * squirrel always tries to run an executable with the same name,
 * so fails to restart if the app's name has changed.
 */
void _tmain( int argc, TCHAR *argv[] )
{
    LPSTR myCmdLine = GetCommandLineA();
    char cmdLine[32767];

    LPSTR cmdLinePos = cmdLine;
    LPSTR toRun = "\"Element.exe\" ";
    strncpy(cmdLinePos, toRun, strlen(toRun));
    cmdLinePos += strlen(toRun);

    if (myCmdLine[0] == '"') ++myCmdLine;
    myCmdLine += strlen(argv[0]);
    if (myCmdLine[0] == '"') ++myCmdLine;
    if (myCmdLine[0] == ' ') ++myCmdLine;

    strncpy(cmdLinePos, myCmdLine, (cmdLine + 32767) - cmdLinePos);

    STARTUPINFO si;
    PROCESS_INFORMATION pi;

    ZeroMemory(&si, sizeof(si));
    si.cb = sizeof(si);
    ZeroMemory(&pi, sizeof(pi));

    if (!CreateProcess(NULL,
        cmdLine,        // Command line
        NULL,           // Process handle not inheritable
        NULL,           // Thread handle not inheritable
        FALSE,          // Set handle inheritance to FALSE
        0,              // No creation flags
        NULL,           // Use parent's environment block
        NULL,           // Use parent's starting directory 
        &si,            // Pointer to STARTUPINFO structure
        &pi )           // Pointer to PROCESS_INFORMATION structure
    ) 
    {
        printf("CreateProcess failed (%d).\n", GetLastError());
        return;
    }
}
