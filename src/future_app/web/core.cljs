(ns future-app.web.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [future-app.handlers]
            [future-app.subs]
            [future-app.web.handlers]
            [future-app.web.subs]
            [future-app.web.routes :as routes]
            [future-app.web.views :as views]
            [future-app.config :as config]))

(when config/debug?
  (println "dev mode"))

(defn mount-root []
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (routes/app-routes)
  (re-frame/dispatch-sync [:initialize-db])
  (mount-root))

