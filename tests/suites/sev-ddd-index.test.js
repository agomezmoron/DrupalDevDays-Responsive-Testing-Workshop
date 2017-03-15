/**
 * @license
 * Copyright (c) 2017 Alejandro Gomez Moron, Oscar Castaño Calle
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/**
 *
 * @summary     Sev DDD Responsive testing
 * @description Index page test
 * @version     0.0.1
 * @file        sev-ddd-index.test.js
 * @author      Alejandro Gómez <agommor@gmail.com>
 * @contact     @agomezmoron
 * @copyright   Copyright 2017
 */
// important, commons should be loaded here
load('../../node_modules/galen-framework-handler/dist/galen-framework-handler.js');

load('../../config.js');

forAll(devicesToTest, function (device) {
    test("Testing on ${deviceName}", function (device) {
        // here goes a test code
        var driver = createDriver(config.baseURL,
            device.size);
        // here is the "key" of the galen-framework testing
        checkLayout(driver, "specs/sev-ddd-index.gspec", device.tags);
        driver.close();
        driver.quit();
    });
});