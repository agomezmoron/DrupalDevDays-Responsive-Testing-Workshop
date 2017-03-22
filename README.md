# DrupalDevDays-Responsive-Testing-Workshop

Drupal Dev Days 2017

<img src="https://seville2017.drupaldays.org/themes/da_vinci/logo.svg" alt="DDD-2017-logo" />

[**1. Config JS File.**](#1-config-js-file)

[**2. Specs.**](#2-specs)

[**3. Tests.**](#3-tests)
_______________________________________
 
 ## 1. Config JS File.
 
 Create file ```config.js``` in project root folder:
 
 <img src="/images/Step1_Creating_Structure_0.png" height="256" />
 
 Edit file ```config.js``` and add this code:
 
 ```
 /** Overriding the config variable defined in the galen-framework-handler **/
 config = {
    baseURL: "https://seville2017.drupaldays.org"
 };
    
 /** Overriding the devices to test variable defined in the galen-framework-handler **/
 devicesToTest = {
    iphone6: devices.iphone6,
    desktop: devices.desktop1024
 };
 ```
 
 ## 2. Specs.
 
 Galen Specs Language is quite flexible and gives you the opportunity 
 to express exactly how you want your website to behave on different devices.
 
 Create folder ```specs``` in project root folder:
 
 <img src="/images/Step1_Creating_Structure_1.png" height="256" />
  
 Create file ```sev-ddd-index.gspec``` in project ```specs/``` folder: 
 
 <img src="/images/Step1_Creating_Structure_2.png" height="256" />
 
 Edit file ```sev-ddd-index.gspec``` and add this code:
  
  ```bash
  @objects
     # menu items
     main-text xpath   //div[@id='block-headerblock']
     
  = Main text =
     # for all the devices
     @on *
         main-text:
             visible
  ```
  
 
 ## 3. Tests.
 
 To give users more flexibility and ease of maintenance, 
 Galen created another simple format for defining test suites. 
 Let's define the required folder and file structure.
 
 Create folder ```tests``` in project root folder:
  
 <img src="/images/Step1_Creating_Structure_3.png" height="256" />
  
 Create folder ```suites``` in project ```tests/``` folder:
   
 <img src="/images/Step1_Creating_Structure_4.png" height="256" />
 
 Create file ```sev-ddd-index.test.js``` in project ```tests/suites/``` folder: 
  
 <img src="/images/Step1_Creating_Structure_5.png" height="256" />  
 
 Edit file ```sev-ddd-index.test.js``` and add this code:
   
 ```bash
 // important, commons should be loaded here
 load('../../node_modules/galen-framework-handler/dist/galen-framework-handler.js');
      
 load('../../config.js');
      
 forAll(devicesToTest, function (device) {
    test("Testing on ${deviceName}", function (device) {
        
        // here goes a test code
        var driver = createDriver(config.baseURL, device.size);
        
        // here is the "key" of the galen-framework testing
        checkLayout(driver, "specs/sev-ddd-index.gspec", device.tags);
        
        driver.close();
        driver.quit();
    });
 });
 ```
 
  _______________________________________
 
 _Congratulations, you are ready to **run** your first test using Galen_
 
 ```bash 
 galen test tests/suites/* --htmlreport reports/
 ```
