# React + Vite

i have opted for the lazy way of using e over event

so far i need to work on reorerding the data cards for the animals as my ai generated seed data did not give working photos and infact the links lead to domains for purchase etc, so ive used wikimedia to obtain working ones,the caviat depending on how you view it being the content does not display in the order of the linked sql table

i have made use of useEffect in the sense of it calling my fetchWildlife function which requests the data from my supabase table and fetches it. when thats done setWildlife updates the wildlife state causing a re render so the animals are on screen. the use of "[]" ensures it only runs once.its passed to gallery and displayed

ive implemented the functionality to navigate the page via the tab key and enlarge the pictures/submit data into the mini form via the enter key,this is visible in my imageitem component.

you can seamlessly nav through the images via the use of tab and enter whilst focused on an enlarged image

ended up making the style folder to make juggling css easier,i thought doing it all out of app.css at first would work universally but it only caused issues so i replaced app.css with a global.css ,plus style folder is cleaner.still need alot more practice to avoid typos and missing dots at start of pathing

terminated "and" becoming a dependency,ive chalked this up to me likely typing "and" when installing multiple things like pg and express

now to do server side things

the server side was not enjoyable at all and i definetly need more experience,the project overall is definetly difficult but i also see some of the positives to doing things in this way meaning with react.
