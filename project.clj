(defproject future-app "0.1.0-SNAPSHOT"
            :description "FIXME: write description"
            :url "http://example.com/FIXME"
            :license {:name "Eclipse Public License"
                      :url  "http://www.eclipse.org/legal/epl-v10.html"}
            :dependencies [[org.clojure/clojure "1.7.0"]
                           [org.clojure/clojurescript "1.7.170"]
                           [reagent "0.5.1" :exclusions [cljsjs/react]]
                           [re-frame "0.6.0"]
                           [secretary "1.2.3"]
                           [compojure "1.4.0"]
                           [ring "1.4.0"]]
            :plugins [[lein-cljsbuild "1.1.1"]
                      [lein-figwheel "0.5.0-2"]
                      [lein-doo "0.1.6"]]
            :clean-targets ^{:protect false} ["resources/public/js/compiled" "target/" "index.ios.js" "index.android.js"]
            :aliases {"prod-build" ^{:doc "Recompile code with prod profile."}
                                   ["do" "clean"
                                    ["with-profile" "prod" "cljsbuild" "once" "ios"]
                                    ["with-profile" "prod" "cljsbuild" "once" "android"]]}
            :profiles {:dev {:cljsbuild    {:builds {:ios     {:source-paths ["src" "env/dev"]
                                                               :figwheel     true
                                                               :compiler     {:output-to     "target/ios/not-used.js"
                                                                              :main          "env.ios.main"
                                                                              :output-dir    "target/ios"
                                                                              :optimizations :none}}
                                                     :android {:source-paths ["src" "env/dev"]
                                                               :figwheel     true
                                                               :compiler     {:output-to     "target/android/not-used.js"
                                                                              :main          "env.android.main"
                                                                              :output-dir    "target/android"
                                                                              :optimizations :none}}
                                                     :web     {:source-paths ["src"]
                                                               :figwheel     {:on-jsload "future-app.web.core/mount-root"
                                                                              :server-port 3450 }
                                                               :compiler     {:main future-app.web.core
                                                                              :output-to "resources/public/js/compiled/app.js"
                                                                              :output-dir "resources/public/js/compiled/out"
                                                                              :asset-path "js/compiled/out"
                                                                              :source-map-timestamp true}}}}
                             }
                       :prod {:cljsbuild {:builds {:ios     {:source-paths ["src" "env/prod"]
                                                             :compiler     {:output-to     "index.ios.js"
                                                                            :main          "env.ios.main"
                                                                            :output-dir    "target/ios"
                                                                            :optimizations :simple}}
                                                   :android {:source-paths ["src" "env/prod"]
                                                             :compiler     {:output-to     "index.android.js"
                                                                            :main          "env.android.main"
                                                                            :output-dir    "target/android"
                                                                            :optimizations :simple}}
                                                   :web     {:source-paths ["src/cljs"]
                                                             :compiler     {:main future-app.core
                                                                            :output-to "resources/public/js/compiled/app.js"
                                                                            :optimizations :advanced
                                                                            :closure-defines {goog.DEBUG false}
                                                                            :pretty-print false}}}}
                              }})