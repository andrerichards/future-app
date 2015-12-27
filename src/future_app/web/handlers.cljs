(ns future-app.web.handlers
  (:require
    [re-frame.core :refer [register-handler path trim-v after dispatch]]))

(register-handler
  :set-active-panel
  (fn [db [_ active-panel]]
    (assoc db :active-panel active-panel)))
