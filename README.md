# How to run project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.1.

## Firstly

Open the terminal and run `yarn` or `npm run install`

## Secondary

In terminal run `yarn start` or `npm run start`

## Finaly

Open on your browser `http://localhost:4200/` now you can see my solution

# These are answers to your Questions

## Answers 1

JSON Web Tokens (JWTs) serve as a popular authentication mechanism in web applications and APIs due to their stateless nature and cryptographic security measures. Your provided example token exhibits the three standard segments: header, payload, and signature. These tokens are considered safe primarily because they are tamper-resistant, thanks to their signature, which ensures the integrity of the token and guards against unauthorized modifications. Additionally, JWTs are self-contained, meaning all necessary information, such as user identity and permissions, is encapsulated within the token itself, reducing the server's burden and enhancing scalability.

However, maintaining the security of JWTs requires careful attention to certain considerations. Firstly, secure key management is crucial to prevent unauthorized access and impersonation. Safeguarding the signing key is paramount, as a compromised key could lead to the generation of fraudulent tokens. Secondly, while JWTs can feature expiration times to mitigate misuse risks, setting appropriate expiration durations is essential to balance security and user experience. Lastly, sensitive information should be handled cautiously within JWT payloads, with encryption employed when necessary to prevent unauthorized access to confidential data. Additionally, measures should be in place to prevent token leakage through potential vulnerabilities like cross-site scripting (XSS) attacks or inadvertent exposure in browser history. Adhering to these best practices ensures the safe and effective use of JWTs for authentication within web applications and APIs.

## Answers 2

Allowing HTML in messages within a web application can introduce security vulnerabilities, with two prominent attack vectors being Cross-Site Scripting (XSS) and HTML Injection.

1. AnswersXSS (Cross-Site Scripting)Answers: In XSS attacks, malicious users inject executable JavaScript code into message content. When viewed by other users, this code executes within their browsers, enabling session hijacking, cookie theft, or redirection to malicious sites. To mitigate XSS risks, employ rigorous input validation and output encoding to neutralize or escape harmful characters. Implementing Content Security Policy (CSP) headers adds an extra layer of defense by restricting script sources, reducing the impact of successful XSS attempts.

2. AnswersHTML InjectionAnswers: HTML Injection occurs when attackers inject HTML markup into messages, altering their appearance or functionality. Although less severe than XSS, it can still lead to unintended behaviors or phishing attempts. Prevention involves stringent input validation and sanitization to remove or neutralize HTML tags and attributes. Adopting a whitelist approach allows only trusted HTML elements and attributes, while context-specific validation ensures appropriate use of user input within HTML documents.

By employing robust input validation, output encoding, and content restrictions, you can effectively mitigate the risks associated with HTML messages in your web application. Regular updates and awareness of emerging threats further bolster your security posture, ensuring continued protection against potential attacks.

## Answers 3

Mutable objects can be altered after creation, while immutable objects cannot be changed once instantiated. In JavaScript, strings are immutable objects; operations like concatenation produce new strings rather than modifying existing ones.

The advantages of immutability include predictability, thread safety, and simpler debugging. However, it can lead to performance overhead and may require adaptation in certain programming contexts.

To achieve immutability, use immutable data structures, object cloning, functional programming, or freezing objects in JavaScript. These approaches promote cleaner code with fewer side effects, though they may require a mindset shift and consideration of performance trade-offs.

## Answers 4

To accelerate the loading of a web application, various optimization techniques can be employed:

1. AnswersOptimize ImagesAnswers: Compress images to reduce file size without significant quality loss. Employ modern formats like WebP and consider lazy loading to defer loading until necessary.

2. AnswersUtilize Browser CachingAnswers: Set cache headers for static resources to allow browsers to store cached copies locally, minimizing the need for repeated downloads.

3. AnswersCDN IntegrationAnswers: Distribute static assets across a Content Delivery Network (CDN) to serve content from servers closer to users, reducing latency.

4. AnswersAsynchronous LoadingAnswers: Load non-essential resources asynchronously to prevent blocking critical content rendering. Utilize async and defer attributes for scripts and asynchronously load CSS.

5. AnswersReduce Server Response TimeAnswers: Optimize server-side code and database queries to minimize response times. Implement caching mechanisms to reduce processing needs.

6. AnswersMinimize and Compress ResourcesAnswers: Minify CSS, JavaScript, and HTML files to reduce size. Enable server compression (e.g., gzip) to further decrease file sizes.

7. AnswersPreconnect and PrefetchAnswers: Use preconnect to establish early connections to third-party domains, reducing connection latency. Employ prefetch to proactively fetch likely-needed resources.

8. AnswersEnable HTTP/2Answers: Utilize HTTP/2 protocol features such as multiplexing and header compression to improve loading speed, especially for sites with many resources.

9. AnswersCode SplittingAnswers: Split large JavaScript bundles into smaller chunks and load them dynamically based on user interactions or route changes to reduce initial load times.

10. AnswersProgressive Web App (PWA) FeaturesAnswers: Implement PWA features like service workers and caching strategies to enable offline functionality and faster subsequent visits.

## Answers 5

From a security standpoint, the first option—choosing your own hardware but working with a company-supplied operating system image—may be considered better. Here's why:

1. AnswersControlled Operating EnvironmentAnswers: The company-supplied operating system image ensures consistency and control over the software stack across the organization. This can facilitate easier management of security patches, updates, and configurations, reducing the risk of vulnerabilities introduced by incompatible or unpatched software.

2. AnswersStandardized Security MeasuresAnswers: By using a company-approved operating system image, security measures such as antivirus software, firewalls, and encryption protocols can be standardized and enforced uniformly across all devices. This consistency helps mitigate the risk of security gaps caused by variations in software configurations.

3. AnswersReduced Attack SurfaceAnswers: A controlled operating environment limits the attack surface by minimizing the diversity of software and configurations. This makes it easier for security teams to monitor, detect, and respond to potential threats effectively.

4. AnswersCompliance and AuditingAnswers: Standardized operating system images facilitate compliance with regulatory requirements and industry standards by ensuring consistent security configurations and adherence to security policies. It also simplifies auditing processes by providing a clear baseline for security assessments.
