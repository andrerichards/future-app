(ns future-app.web.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :refer [register-sub]]))

(register-sub
  :active-panel
  (fn [db _]
    (reaction (:active-panel @db))))
