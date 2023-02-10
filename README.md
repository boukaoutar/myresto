# myresto_client



# Installation Docker

Avant de pouvoir exécuter ce projet sur votre ordinateur, vous devez installer les dépendances suivantes :

- Docker

Une fois que vous avez installé Docker, vous pouvez construire l'image Docker pour ce projet en utilisant la commande suivante dans votre terminal à partir du répertoire contenant le fichier Docker :

### `docker build -d team/app .`  

Exécution

Pour exécuter ce projet sur votre ordinateur, utilisez la commande suivante dans votre terminal :

### `docker run -p 3000:3000 -d team/app`  

Cela démarrera un conteneur Docker pour ce projet et vous pourrez accéder à l'application en accédant à l'adresse IP de votre machine hôte sur le port local 3000 déja spécifié .

# Installation Spring Boot

#### Prérequis

- Java 8 ou version ultérieure
- Maven 3.x ou version ultérieure

#### Etape 1 : Téléchargement du projet

Téléchargez le code source du projet à partir de votre dépôt Git ou copiez-le sur votre machine.

#### Etape 2 : Build du projet

Ouvrez une invite de commande ou terminal et accédez au répertoire racine du projet. Exécutez la commande suivante pour construire le projet :

### `mvn clean install`

#### Etape 3 : Exécution de l'application

Une fois le build terminé avec succès, exécutez la commande suivante pour lancer l'application :

### `mvn spring-boot:run`

Vous devriez voir une sortie similaire à ceci :

...
2020-10-01 20:15:27.378  INFO 82420 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''
2020-10-01 20:15:27.381  INFO 82420 --- [           main] c.e.s.SpringBootExampleApplication : Started SpringBootExampleApplication in 2.864 seconds (JVM running for 3.485)

#### Etape 4 : Vérification de l'application
Maintenant, l'application devrait être en cours d'exécution sur votre machine. Ouvrez votre navigateur web et accédez à l'URL suivante :

`http://localhost:8080`

Vous devriez voir la page d'accueil de l'application qui vous confirme que l'application est en cours d'exécution avec succès.

# Installation ReactJs

Installation

Avant de pouvoir exécuter ce projet sur votre ordinateur, vous devez installer les dépendances suivantes :

- Node.js
- npm (gestionnaire de paquets Node)
- ReactJS

Une fois que vous avez installé les dépendances ci-dessus, vous pouvez installer les dépendances du projet en utilisant la commande suivante dans votre terminal :

### `npm install`

Exécution

Pour exécuter ce projet sur votre ordinateur, utilisez la commande suivante dans votre terminal :

### `npm start`

Cela démarrera le serveur de développement et vous pourrez accéder à l'application en accédant à `http://localhost:3000` dans votre navigateur.

# Test unitaire JUnit

### Prérequis

Avant de commencer à écrire des tests unitaires avec JUnit, vous avez besoin de connaître les bases de la programmation en Java et d'avoir installé un environnement de développement Java (IDE) comme Eclipse ou IntelliJ IDEA.

### Configuration de JUnit

Pour utiliser JUnit dans votre projet, vous devez tout d'abord ajouter la bibliothèque JUnit à votre projet. Si vous utilisez un IDE, vous pouvez facilement le faire en utilisant le gestionnaire de dépendances. Sinon, vous pouvez le télécharger et l'ajouter manuellement à votre projet.

### Écriture de tests unitaires

Pour écrire des tests unitaires avec JUnit, vous devez créer une classe de test pour chaque composant de votre code que vous souhaitez tester. Chaque classe de test doit étendre la classe org.junit.Test et contenir une ou plusieurs méthodes annotées avec @Test.

Voici un exemple simple de classe de test avec une seule méthode de test :

`import org.junit.Test;`
`import static org.junit.Assert.assertEquals;`

`public class ExampleTest {`
  `@Test`
  `public void testExample() {`
    `int expected = 2;`
    `int result = 1 + 1;`
    `assertEquals(expected, result);`
  `}`
`}`

### Exécution des tests unitaires

Une fois que vous avez écrit vos classes de test, vous pouvez les exécuter en utilisant votre IDE ou en utilisant la ligne de commande. Dans les deux cas, JUnit exécutera toutes les méthodes annotées avec @Test et vous informera de tout échec.
