let separatorHidden = {
    id     : "separator",
    hidden : true,
};
let separatorShown = {
    id     : "separator",
    hidden : false,
};
/* ----------------------------------------------------------------------------------------------------------------- */
let java = {
    "id"            : "java",
    "hidden"        : false,
    "proficiency"   : "advance",
    "content"       : "Java is my primary development language",
    "icon"          : "assets/ico/java.png",
    "ref"           : "http://www.oracle.com/technetwork/java/javase/overview/index.html"
};
let html = {
    "id"            : "html",
    "title"         : "HTML5",
    "hidden"        : false,
    "proficiency"   : "advance",
    "content"       : "Using HTML5 for layout design",
    "icon"          : "assets/ico/html.png",
    "ref"           : "https://developer.mozilla.org/en-US/docs/Web/HTML"
};
let css = {
    "id"            : "css",
    "title"         : "CSS3",
    "hidden"        : false,
    "proficiency"   : "novice",
    "content"       : "Hands-on experience in web application layout modelling & styling",
    "icon"          : "assets/ico/css.png",
    "ref"           : "https://developer.mozilla.org/en-US/docs/Web/CSS"
};
let javascript = {
    "id"            : "javascript",
    "title"         : "JavaScript",
    "hidden"        : false,
    "proficiency"   : "intermediate",
    "content"       : "Using JavaScript as required for dynamic object-oriented interactions",
    "icon"          : "assets/ico/js.png",
    "ref"           : "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
};
let typescript = {
    "id"            : "typescript",
    "title"         : "TypeScript",
    "hidden"        : false,
    "proficiency"   : "novice",
    "content"       : "Using TypeScript with Angular",
    "icon"          : "assets/ico/ts.png",
    "ref"           : "https://www.typescriptlang.org/docs/home.html"
};
/* ----------------------------------------------------- */
let languages = {
    "id"     : "languages",
    "title"  : "Languages",
    "float"  : "left",
    "skills" : [java,
        separatorShown,
        html, css,
        separatorShown,
        javascript, typescript]
};
/* ----------------------------------------------------------------------------------------------------------------- */
let angular = {
    "id"            : "angular",
    "hidden"        : false,
    "proficiency"   : "novice",
    "content"       : "Self trained Angular developer",
    "icon"          : "assets/ico/angular.png",
    "ref"           : "https://angular.io/docs"
};
let bootstrap = {
    "id"            : "bootstrap",
    "hidden"        : false,
    "proficiency"   : "advance",
    "content"       : "Self-taught, applied knowledge in Responsive Web Designs",
    "icon"          : "assets/ico/bootstrap.png",
    "ref"           : "https://getbootstrap.com/docs/4.1/getting-started/introduction/"
};
let jQuery = {
    "id"            : "jQuery",
    "title"         : "jQuery",
    "hidden"        : false,
    "proficiency"   : "advance",
    "content"       : "Using jQuery for dynamic UI interactions and asynchronous comunications",
    "icon"          : "assets/ico/jquery.png",
    "ref"           : "https://api.jquery.com/"
};
let spring_framework = {
    "id"            : "spring-framework",
    "title"         : "Spring Framework",
    "hidden"        : false,
    "proficiency"   : "advance",
    "content"       : "Framework of choice for middleware development in Controller & Persistence layers",
    "icon"          : "assets/ico/spring-framework.png",
    "ref"           : "https://spring.io/projects/spring-framework",
};
let spring_integration = {
    "id"            : "spring-integration",
    "title"         : "Spring Integration",
    "hidden"        : false,
    "proficiency"   : "intermediate",
    "content"       : "Hands-on experience with integration of JMS, REST & Azure based Services",
    "icon"          : "assets/ico/spring-integration.png",
    "ref"           : "https://spring.io/projects/spring-integration"
};
let spring_data_jpa = {
    "id"            : "spring-data-jpa",
    "title"         : "Spring Data JPA",
    "hidden"        : false,
    "proficiency"   : "intermediate",
    "content"       : "Using as wrapper over persistence layer framework",
    "icon"          : "assets/ico/spring-data.png",
    "ref"           : "https://spring.io/projects/spring-data"
};
let hibernate = {
    "id"            : "hibernate",
    "hidden"        : false,
    "proficiency"   : "intermediate",
    "content"       : "Using for persistence layer, directly or with Spring",
    "icon"          : "assets/ico/hibernate.png",
    "ref"           : "http://hibernate.org/orm/documentation/4.3/"
};
let struts = {
    "id"            : "struts",
    "hidden"        : false,
    "proficiency"   : "intermediate",
    "content"       : "Used in past projects for UI and conroller layer development",
    "icon"          : "assets/ico/struts.png",
    "ref"           : "https://struts.apache.org/docs/"
};
/* ----------------------------------------------------- */
let frameworks = {
    "id"     : "frameworks",
    "title"  : "Dev Tools",
    "float"  : "right",
    "skills" : [
        angular, bootstrap, jQuery,
        separatorShown,
        spring_framework, spring_integration,
        separatorShown,
        spring_data_jpa, hibernate,
        separatorShown,
        struts]
};
/* ----------------------------------------------------------------------------------------------------------------- */
let junit = {
    "id"            : "junit",
    "title"         : "JUnit",
    "hidden"        : false,
    "proficiency"   : "advance",
    "content"       : "Writing unit tests in java",
    "icon"          : "assets/ico/junit.png",
    "ref"           : "https://github.com/junit-team/junit4/wiki/Getting-started"
};
let mockito = {
    "id"            : "mockito",
    "hidden"        : false,
    "proficiency"   : "intermediate",
    "content"       : "Mocking java with mockito",
    "icon"          : "assets/ico/mockito.png",
    "ref"           : "https://github.com/mockito/mockito/wiki"
};
let powermock = {
    "id"            : "powermock",
    "title"         : "PowerMock",
    "hidden"        : false,
    "proficiency"   : "novice",
    "content"       : "Java mocking on overdose",
    "icon"          : "assets/ico/powermock.png",
    "ref"           : "https://github.com/powermock/powermock/wiki/Mockito"
};
let wiremock = {
    "id"            : "wiremock",
    "title"         : "WireMock",
    "hidden"        : false,
    "proficiency"   : "intermediate",
    "content"       : "Mocking REST Services with WireMock",
    "icon"          : "assets/ico/wiremock.png",
    "ref"           : "http://wiremock.org/docs/getting-started/"
};
/* ----------------------------------------------------- */
let testTools = {
    "id"     : "test-tools",
    "title"  : "Testing Tools",
    "float"  : "left",
    "skills" : [junit, mockito, powermock, wiremock]
};
/* ----------------------------------------------------------------------------------------------------------------- */
let jenkins = {
    "id"            : "jenkins",
    "hidden"        : false,
    "proficiency"   : "basic",
    "content"       : "Exposure to Jenkins for setup, build & deployment to nexus repository",
    "icon"          : "assets/ico/jenkins.png",
    "ref"           : "https://jenkins.io/doc/"
};
let maven = {
    "id"            : "maven",
    "hidden"        : false,
    "proficiency"   : "advance",
    "content"       : "Build, configuration & deployment of web and middleware applications",
    "icon"          : "assets/ico/maven.png",
    "ref"           : "https://maven.apache.org/users/index.html"
};
let npm = {
    "id"            : "npm",
    "title"         : "NPM",
    "hidden"        : true,
    "proficiency"   : "basic",
    "content"       : "Exposure to npm for package management",
    "icon"          : "assets/ico/npm.png",
    "ref"           : "https://docs.npmjs.com/"
};
/* ----------------------------------------------------- */
let buildTools = {
    "id"     : "build-tools",
    "title"  : "Build Tools",
    "float"  : "right",
    "skills" : [ maven, jenkins, separatorHidden, npm]
};
