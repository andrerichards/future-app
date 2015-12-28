# future-app

A ClojureScript/Reagent/re-frame project to get iOS and Android native apps (React Native) working in the same project as a reagent/re-frame web-app.

The idea was to check if some of the 'logic' (code in `handlers` and `subs`) can be shared between all three targets, while each target will have its own views.

This is working, the only 'limitation' is that you can only have one figwheel instance running at any point in time - so you can work with, for example, the iOS view (lein figwheel ios), but has to kill that, and restart figwheel (lein figwheel web) to work with the web-app view.

There is one `app-db`, `handlers.cljs` and `subs.cljs` that is shared between all three targets (i.e. iOS, Android and web-app). Some targets also define their own `handlers` and `subs`, e.g. `future.app.web.handlers` define handlers that are only applicable to the web-app (setting the currently visible panel).

## Usage

The initial project was created using [re-natal](https://www.npmjs.com/package/re-natal).
All instructions for running on iOS and Android will be as per the re-natal instructions.

The web-app was then manually added to the project, by using the re-frame lein template to create another project, and using that as an example to manually add the necessary changes to this project.

Specifically, a `:web` build was added `project.clj` under the `:dev` profile.

To start figwheel for the web-app:

```
lein clean
lein figwheel web
```
## License

Copyright ©Andre Richards 2015

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.