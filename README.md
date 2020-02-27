# Web App From CSS to the Rescue

Een client-side trivia app met 12 leuke vragen!

![Trivia app screenshot](https://raw.githubusercontent.com/randy554/web-app-from-scratch-1920/master/images/Trivia%20app.png)

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->


<!-- Maybe a table of contents here? 📚 -->
### Inhoudsopgave

- Installeren
- Actor diagram
- API
- To-do
- License

<!-- How about a section that describes how to install this project? 🤓 -->
### Installeren


<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->
Download deze repo bestand naar iedere willekeurige locatie op de pc. Open web-app-from-scratch-1920 -> docs -> index.html.

### API

De app maakt gebruik van de [Trivia API](https://opentdb.com/api_config.php). De response data is <strong>JSON</strong>. Er kan gebruik worden gemaakt van een SESSION TOKEN. Deze zorgt ervoor dat gedurende de sessie alleen maar unieke vragen worden terug gestuurd. De sessie doet 6 uur. Verder kan de API zonder key worden gebruikt. Er is in de documentatie helaas niks te
vinden over limiet van API gebruik.

#### Voorbeeld van response data:
https://opentdb.com/api.php?amount=12&category=12&difficulty=easy&type=boolean

#### Omschrijving
De API biedt de mogelijkheid om tussen de 1 en 50 Trivia vragen te terug te krijgen. Deze vragen kunnen gaan over verschillende categoriën zoals politiek & geschiedenis. Verder kun je de moeilijkheidsgraad van de vragen aanpassen op easy, medium en hard. Ook kan er gekozen worden om multiple choice antwoorden of boolean antwoorden te ontvangen.


### To Do
 - [x] WAFS Github forken
 - [x] WAFS Project in Github aanmaken
 - [x] API vinden
 - [x] Readme updaten

 - [x] API call uitvoeren
 - [x] HTML code schrijven
 - [x] CSS toevoegen
 - [] Refactor JS
 - [] Actor diagram

### Libraries

[Routi](http://projects.jga.me/routie/)


### License

Creative Commons Attribution-ShareAlike 4.0 International <a href="License https://creativecommons.org/licenses/by-sa/4.0/" alt="Creative Commons Licens"> Link </a>
