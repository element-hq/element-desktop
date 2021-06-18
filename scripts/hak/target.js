"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENABLED_TARGETS = exports.TARGETS = void 0;
const aarch64AppleDarwin = {
    id: 'aarch64-apple-darwin',
    platform: 'darwin',
    arch: 'arm64',
};
const i686PcWindowsMsvc = {
    id: 'i686-pc-windows-msvc',
    platform: 'win32',
    arch: 'ia32',
    vcVarsArch: 'x86',
};
const x8664PcWindowsMsvc = {
    id: 'x86_64-pc-windows-msvc',
    platform: 'win32',
    arch: 'x64',
    vcVarsArch: 'amd64',
};
const x8664AppleDarwin = {
    id: 'x86_64-apple-darwin',
    platform: 'darwin',
    arch: 'x64',
};
const x8664UnknownLinuxGnu = {
    id: 'x86_64-unknown-linux-gnu',
    platform: 'linux',
    arch: 'x64',
};
exports.TARGETS = {
    'aarch64-apple-darwin': aarch64AppleDarwin,
    'i686-pc-windows-msvc': i686PcWindowsMsvc,
    'x86_64-pc-windows-msvc': x8664PcWindowsMsvc,
    'x86_64-apple-darwin': x8664AppleDarwin,
    'x86_64-unknown-linux-gnu': x8664UnknownLinuxGnu,
};
// The set of targets we build by default, sorted by increasing complexity so
// that we fail fast when the native host target fails.
exports.ENABLED_TARGETS = [
    exports.TARGETS['x86_64-apple-darwin'],
    exports.TARGETS['aarch64-apple-darwin'],
    exports.TARGETS['x86_64-unknown-linux-gnu'],
    exports.TARGETS['i686-pc-windows-msvc'],
];
