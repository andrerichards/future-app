(ns future-app.core-test
  (:require [cljs.test :refer-macros [deftest testing is]]
            [future-app.core :as core]))

(deftest fake-test
  (testing "fake description"
    (is (= 1 2))))
