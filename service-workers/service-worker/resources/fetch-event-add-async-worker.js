importScripts('worker-testharness.js');
importScripts('/resources/idlharness.js');

let t = async_test("Fetch event added asynchronously doesn't throw");

step_timeout(function() {
  try {
    self.addEventListener('fetch', function() {
      // Nothing to do.
    })
  } catch(error) {
    t.step(function() {
      assert_unreached();
    });
  } finally {
    t.done();
  }
}, 0);
