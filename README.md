# Celeb Summary

```
                888        888            d8b888            
                888        888            Y8P888            
                888        888               888            
 .d8888b .d88b. 888 .d88b. 88888b. 888d888888888888888  888 
d88P"   d8P  Y8b888d8P  Y8b888 "88b888P"  888888   888  888 
888     8888888888888888888888  888888    888888   888  888 
Y88b.   Y8b.    888Y8b.    888 d88P888    888Y88b. Y88b 888 
 "Y8888P "Y8888 888 "Y8888 88888P" 888    888 "Y888 "Y88888 
                                                        888 
                                                   Y8b d88P 
                                                    "Y88P"  
```

## Description

This project allows users to enter a celebrity name and receive a short summary of information about them from Wikipedia.

Currently it only returns the title of the requested page. Please see the 'next steps' section for details of upcoming features.

## Tech Stack

* Media Commons API
* JavaScript
* Jasmine

## Installation

```
$ git clone https://github.com/rednblack99/wikipedia_summary
$ cd wikipedia_summary
$ open src/interface.js
```

## How to Use

After opening interface.js in a browser of your choice, right click and open the developer console. From here you can enter the following commands:

```
$ celeb_summary = new CelebSummary
$ celeb_summary.see_info("CELEBRITY NAME")
```

The chosen celebrities summary will be displayed in your console.

## Next Steps

Currently the API returns all the required information but the code doesn't display it properly. I need to add a method which will sort through the returned HTML and output birth, death (if relevant), spouse (if relevant) and the main summary from the article.
