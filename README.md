# HackNC Project: Job Board for the disable

Backend: Spring boot, H2 database

Frontend: thymleaf, Bootstrap

## Ideas

- jobs for disability: depression? OCD? 洁癖? Mental Illness
- Inform people with disability about job availability for their disability
  - company post their disability accommodation
- Connect disability people with employer (unable to attend career fair)
- [https://www.healthline.com/health/anxiety/jobs-for-people-with-anxiety#jobs](https://www.healthline.com/health/anxiety/jobs-for-people-with-anxiety#jobs)

---

# Documentation

## Running the Application

The application should just run in Intellij after all the dependency in `pom.xml` is loaded

## H2 Database console

Navigate to `[http://localhost:8080/h2-console](http://localhost:8080/h2-console)`

JDBC: `jdbc:h2:./src/main/resources/db/data`

Username: `sa`

Password: `password`

---

# Next Step

## H2

- Figure out how to run sql command on initial run
  - reason: .db file will not commit

---

# Resources

[Spring Boot Thymeleaf Tutorial For Beginners - YouTube](https://www.youtube.com/watch?v=hoVUmn8ZCOo)

[Introduction to Using Thymeleaf in Spring | Baeldung](https://www.baeldung.com/thymeleaf-in-spring-mvc)

[Spring Boot With H2 Database | Baeldung](https://www.baeldung.com/spring-boot-h2-database)

[Getting Started | Building a RESTful Web Service (spring.io)](https://spring.io/guides/gs/rest-service/)