# DrupalDevDays-Responsive-Testing-Workshop
Drupal Dev Days 2017

[**1. Specs Components.**](#1-specs-components)

[**2. Run Tests.**](#2-run-tests)

 _______________________________________
 
 ## 1. Specs Components.
 
 Create folder ```components``` in project ```specs/``` folder:
 
 <img src="/images/Step2_Creating_Components_0.png" height="256" />
 
 Create file ```sev-ddd-header.gspec``` in project root folder:
 
 <img src="/images/Step2_Creating_Components_1.png" height="256" />
 
 Edit file ```sev-ddd-header.gspec``` and add this code:
   
 ```bash
 @objects
   # menu items
   menu-left-items    xpath   //ul[@block='block-headerleftmenu']/li
   menu-right-items   xpath   //ul[@block='block-headerrightmenu']/li
     
   # mobile menu
   menu-mobile    xpath   //a[@id='menuButtonTrigger']
     
   # logo
   logo   xpath   //a[@class='branding__logo']
        
         
 = Menu section =
   # for all the devices
   @on desktop, tablet, phablet-landscape
     menu-left-items:
       visible
     menu-right-items:
       visible
     menu-mobile:
       absent
     
 # custom exception case for mobile and phablet-portrait
 @on mobile, phablet-portrait
   menu-mobile:
     visible
   menu-right-items:
     absent
   menu-left-items:
     absent
     
     
 = Logo =
   # for all the devices
   @on *
     logo:
       visible
 ```
 
 Edit file ```sev-ddd-index.gspec``` and add this import:
 
 ```bash
 @import components/sev-ddd-header.gspec
 ```
 
 ## 2. Run Tests.
 
 ```bash 
 galen test tests/suites/ --htmlreport reports/
 ```