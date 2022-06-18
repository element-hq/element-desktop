/*
Copyright 2020 The Matrix.org Foundation C.I.C.

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

import path from 'path';
import rimraf from 'rimraf';

import { DependencyInfo } from './dep';
import HakEnv from './hakEnv';

export default async function clean(hakEnv: HakEnv, moduleInfo: DependencyInfo): Promise<void> {
    await new Promise<void>((resolve, reject) => {
        rimraf(moduleInfo.moduleDotHakDir, (err: Error) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });

    await new Promise<void>((resolve, reject) => {
        rimraf(path.join(hakEnv.dotHakDir, 'links', moduleInfo.name), (err: Error) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });

    await new Promise<void>((resolve, reject) => {
        rimraf(path.join(hakEnv.projectRoot, 'node_modules', moduleInfo.name), (err: Error) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}
