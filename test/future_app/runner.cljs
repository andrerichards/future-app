(ns future-app.runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [future-app.core-test]))

(doo-tests 'future-app.core-test)

