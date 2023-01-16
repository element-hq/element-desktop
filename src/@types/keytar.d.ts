// Based on https://github.com/atom/node-keytar/blob/master/keytar.d.ts because keytar is a hak-dependency and not a normal one
// Definitions by: Milan Burda <https://github.com/miniak>, Brendan Forster <https://github.com/shiftkey>, Hari Juturu <https://github.com/juturu>
// Adapted from DefinitelyTyped: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/keytar/index.d.ts

declare module "keytar" {
    /**
     * Get the stored password for the service and account.
     *
     * @param service The string service name.
     * @param account The string account name.
     *
     * @returns A promise for the password string.
     */
    export function getPassword(service: string, account: string): Promise<string | null>;

    /**
     * Add the password for the service and account to the keychain.
     *
     * @param service The string service name.
     * @param account The string account name.
     * @param password The string password.
     *
     * @returns A promise for the set password completion.
     */
    export function setPassword(service: string, account: string, password: string): Promise<void>;

    /**
     * Delete the stored password for the service and account.
     *
     * @param service The string service name.
     * @param account The string account name.
     *
     * @returns A promise for the deletion status. True on success.
     */
    export function deletePassword(service: string, account: string): Promise<boolean>;

    /**
     * Find a password for the service in the keychain.
     *
     * @param service The string service name.
     *
     * @returns A promise for the password string.
     */
    export function findPassword(service: string): Promise<string | null>;

    /**
     * Find all accounts and passwords for `service` in the keychain.
     *
     * @param service The string service name.
     *
     * @returns A promise for the array of found credentials.
     */
    export function findCredentials(service: string): Promise<Array<{ account: string; password: string }>>;
}
