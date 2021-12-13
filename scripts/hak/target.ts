/*
Copyright 2021 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// We borrow Rust's target naming scheme as a way of expressing all target
// details in a single string.
// See https://doc.rust-lang.org/rustc/platform-support.html.
export type TargetId =
    'aarch64-apple-darwin' |
    'x86_64-apple-darwin' |
    'universal-apple-darwin' |
    'i686-pc-windows-msvc' |
    'x86_64-pc-windows-msvc' |
    'x86_64-unknown-linux-gnu';

// Values are expected to match those used in `process.platform`.
type Platform = 'darwin' | 'linux' | 'win32';

// Values are expected to match those used in `process.arch`.
type Arch = 'arm64' | 'ia32' | 'x64' | 'universal';

// Values are expected to match those used by Visual Studio's `vcvarsall.bat`.
// See https://docs.microsoft.com/cpp/build/building-on-the-command-line?view=msvc-160#vcvarsall-syntax
type VcVarsArch = 'amd64' | 'arm64' | 'x86';

export type Target = {
    id: TargetId;
    platform: Platform;
    arch: Arch;
};

export type WindowsTarget = Target & {
    platform: 'win32';
    vcVarsArch: VcVarsArch;
};

export type UniversalTarget = Target & {
    arch: 'universal';
    subtargets: Target[];
};

const aarch64AppleDarwin: Target = {
    id: 'aarch64-apple-darwin',
    platform: 'darwin',
    arch: 'arm64',
};

const x8664AppleDarwin: Target = {
    id: 'x86_64-apple-darwin',
    platform: 'darwin',
    arch: 'x64',
};

const universalAppleDarwin: UniversalTarget = {
    id: 'universal-apple-darwin',
    platform: 'darwin',
    arch: 'universal',
    subtargets: [
        aarch64AppleDarwin,
        x8664AppleDarwin,
    ],
};

const i686PcWindowsMsvc: WindowsTarget = {
    id: 'i686-pc-windows-msvc',
    platform: 'win32',
    arch: 'ia32',
    vcVarsArch: 'x86',
};

const x8664PcWindowsMsvc: WindowsTarget = {
    id: 'x86_64-pc-windows-msvc',
    platform: 'win32',
    arch: 'x64',
    vcVarsArch: 'amd64',
};

const x8664UnknownLinuxGnu: Target = {
    id: 'x86_64-unknown-linux-gnu',
    platform: 'linux',
    arch: 'x64',
};

export const TARGETS: Record<TargetId, Target> = {
    'aarch64-apple-darwin': aarch64AppleDarwin,
    'x86_64-apple-darwin': x8664AppleDarwin,
    'universal-apple-darwin': universalAppleDarwin,
    'i686-pc-windows-msvc': i686PcWindowsMsvc,
    'x86_64-pc-windows-msvc': x8664PcWindowsMsvc,
    'x86_64-unknown-linux-gnu': x8664UnknownLinuxGnu,
};

// The set of targets we build by default, sorted by increasing complexity so
// that we fail fast when the native host target fails.
export const ENABLED_TARGETS: Target[] = [
    TARGETS['universal-apple-darwin'],
    TARGETS['x86_64-unknown-linux-gnu'],
    TARGETS['x86_64-pc-windows-msvc'],
];

export function getHost(): Target {
    return Object.values(TARGETS).find(target => (
        target.platform === process.platform &&
        target.arch === process.arch
    ));
}

export function isHostId(id: TargetId): boolean {
    return getHost()?.id === id;
}

export function isHost(target: Target): boolean {
    return getHost()?.id === target.id;
}
