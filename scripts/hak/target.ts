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

import { GLIBC, MUSL, family as processLibC } from "detect-libc";

// We borrow Rust's target naming scheme as a way of expressing all target
// details in a single string.
// See https://doc.rust-lang.org/rustc/platform-support.html.
export type TargetId =
    'aarch64-apple-darwin' |
    'x86_64-apple-darwin' |
    'universal-apple-darwin' |
    'i686-pc-windows-msvc' |
    'x86_64-pc-windows-msvc' |
    'i686-unknown-linux-musl' |
    'i686-unknown-linux-gnu' |
    'x86_64-unknown-linux-musl' |
    'x86_64-unknown-linux-gnu' |
    'aarch64-unknown-linux-musl' |
    'aarch64-unknown-linux-gnu' |
    'powerpc64le-unknown-linux-musl' |
    'powerpc64le-unknown-linux-gnu';

// Values are expected to match those used in `process.platform`.
export type Platform = 'darwin' | 'linux' | 'win32';

// Values are expected to match those used in `process.arch`.
export type Arch = 'arm64' | 'ia32' | 'x64' | 'ppc64' | 'universal';

// Values are expected to match those used by Visual Studio's `vcvarsall.bat`.
// See https://docs.microsoft.com/cpp/build/building-on-the-command-line?view=msvc-160#vcvarsall-syntax
export type VcVarsArch = 'amd64' | 'arm64' | 'x86';

// Values are expected to match those used in `detect-libc`.
export type LibC = GLIBC | MUSL;

export type Target = {
    id: TargetId;
    platform: Platform;
    arch: Arch;
};

export type WindowsTarget = Target & {
    platform: 'win32';
    vcVarsArch: VcVarsArch;
};

export type LinuxTarget = Target & {
    platform: 'linux';
    libC: LibC;
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

const x8664UnknownLinuxGnu: LinuxTarget = {
    id: 'x86_64-unknown-linux-gnu',
    platform: 'linux',
    arch: 'x64',
    libC: 'glibc',
};

const x8664UnknownLinuxMusl: LinuxTarget = {
    id: 'x86_64-unknown-linux-musl',
    platform: 'linux',
    arch: 'x64',
    libC: 'musl',
};

const i686UnknownLinuxGnu: LinuxTarget = {
    id: 'i686-unknown-linux-gnu',
    platform: 'linux',
    arch: 'ia32',
    libC: 'glibc',
};

const i686UnknownLinuxMusl: LinuxTarget = {
    id: 'i686-unknown-linux-musl',
    platform: 'linux',
    arch: 'ia32',
    libC: 'musl',
};

const aarch64UnknownLinuxGnu: LinuxTarget = {
    id: 'aarch64-unknown-linux-gnu',
    platform: 'linux',
    arch: 'arm64',
    libC: 'glibc',
};

const aarch64UnknownLinuxMusl: LinuxTarget = {
    id: 'aarch64-unknown-linux-musl',
    platform: 'linux',
    arch: 'arm64',
    libC: 'musl',
};

const powerpc64leUnknownLinuxGnu: LinuxTarget = {
    id: 'powerpc64le-unknown-linux-gnu',
    platform: 'linux',
    arch: 'ppc64',
    libC: 'glibc',
};

const powerpc64leUnknownLinuxMusl: LinuxTarget = {
    id: 'powerpc64le-unknown-linux-musl',
    platform: 'linux',
    arch: 'ppc64',
    libC: 'musl',
};

export const TARGETS: Record<TargetId, Target> = {
    // macOS
    'aarch64-apple-darwin': aarch64AppleDarwin,
    'x86_64-apple-darwin': x8664AppleDarwin,
    'universal-apple-darwin': universalAppleDarwin,
    // Windows
    'i686-pc-windows-msvc': i686PcWindowsMsvc,
    'x86_64-pc-windows-msvc': x8664PcWindowsMsvc,
    // Linux
    'i686-unknown-linux-musl': i686UnknownLinuxMusl,
    'i686-unknown-linux-gnu': i686UnknownLinuxGnu,
    'x86_64-unknown-linux-musl': x8664UnknownLinuxMusl,
    'x86_64-unknown-linux-gnu': x8664UnknownLinuxGnu,
    'aarch64-unknown-linux-musl': aarch64UnknownLinuxMusl,
    'aarch64-unknown-linux-gnu': aarch64UnknownLinuxGnu,
    'powerpc64le-unknown-linux-musl': powerpc64leUnknownLinuxMusl,
    'powerpc64le-unknown-linux-gnu': powerpc64leUnknownLinuxGnu,
};

export function getHost(): Target {
    return Object.values(TARGETS).find(target => (
        target.platform === process.platform &&
        target.arch === process.arch &&
        (
            process.platform !== 'linux' ||
            (target as LinuxTarget).libC === processLibC
        )
    ));
}

export function isHostId(id: TargetId): boolean {
    return getHost()?.id === id;
}

export function isHost(target: Target): boolean {
    return getHost()?.id === target.id;
}
