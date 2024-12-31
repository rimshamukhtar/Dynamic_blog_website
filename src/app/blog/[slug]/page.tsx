// import CommentSection from "@/app/components/CommentSection";
// import React from "react";
// import Image from "next/image";

// const posts = {
//   "ai-in-healthcare": {
//     image: "/AI in health.jpg",
//     title: "AI in Healthcare",
//     content:
//     [
//       "AI is set to revolutionize the healthcare industry in the future. It will improve diagnostics by analyzing medical images like X-rays and MRIs with greater accuracy and speed, aiding in early disease detection through patterns in data.",
//       <br /> ,<br />,
//       "AI will enable personalized medicine by analyzing genetic information to suggest targeted therapies and adapting treatments based on real-time patient responses. Predictive analytics will allow healthcare providers to assess risks for chronic diseases and predict the spread of infectious diseases, helping in preventive care and epidemic management.",
//       "Virtual health assistants, powered by AI, will enhance patient interactions by answering questions, scheduling appointments, and integrating into telemedicine platforms for real-time diagnostics. AI-powered surgical robots will perform precise surgeries and enable remote operations.",
//       <br />,<br />,
//       "In drug discovery, AI will accelerate research by analyzing vast amounts of data to identify potential treatments, reducing the time and cost of drug trials. Administrative tasks like managing medical records and billing will be automated, increasing efficiency. AI tools will also support mental health care through therapy chatbots and systems that detect symptoms of anxiety and depression.",
//       <br />,<br />,
//       "Wearable AI devices will continuously monitor health metrics and provide real-time alerts for potential issues. While AI promises to make healthcare more accurate, accessible, and affordable, challenges such as data privacy, algorithm bias, and integration with existing systems need to be addressed. Combining AI’s capabilities with human expertise will transform healthcare, focusing on prevention, early diagnosis, and personalized treatment to improve lives.",
//     ],
//   },
//   "ai-in-education": {
//       image: "/AI in education.jpg",
//       title: "AI in Learning",
//       content:
//       [
//         'AI is expected to transform education and e-learning by personalizing learning experiences to match individual student needs. Intelligent tutoring systems will analyze student performance and provide tailored feedback and recommendations, helping learners progress at their own pace. AI-powered tools will enhance accessibility by offering real-time translation, voice-to-text features, and adaptive learning environments for students with disabilities.',
//         <br />,<br />,
//         'The use of AI in automated grading will save educators time, allowing them to focus on teaching and mentoring. Virtual reality combined with AI will create immersive learning experiences, enabling students to explore complex topics interactively, such as historical events or scientific experiments. Predictive analytics will help educators identify at-risk students early and implement interventions to improve outcomes.',
//         <br />,<br />,
//         'AI chatbots will serve as 24/7 learning assistants, answering student queries and providing additional resources instantly. Instructors will benefit from AI-driven content creation tools that generate quizzes, lesson plans, and summaries based on specific learning objectives. AI will also play a role in bridging language barriers, offering personalized language learning solutions, and supporting global collaboration in education.',
//         <br />,<br />,
//         'By continuously analyzing data and improving algorithms, AI will make education more adaptive, inclusive, and efficient. While challenges like data privacy and equitable access need to be addressed, AI has the potential to democratize learning, empowering students and educators around the world.',
//       ]
//            },
//            "ai-in-autonomous": {
//       image: "/AI in Autonomous.jpeg",
//       title: "AI on Wheels",
//       content:
//           [
//             'Artificial intelligence (AI) will play a transformative role in the development of autonomous systems in the future, particularly in areas like transportation, healthcare, and robotics. In autonomous vehicles, AI algorithms will continue to advance, enabling cars to make real-time decisions based on sensor data, such as camera images and radar signals. This will improve safety, efficiency, and reduce human error, potentially leading to fully autonomous cars on the roads.',
//             <br />,<br />,
//             'In healthcare, AI-driven autonomous systems will assist in diagnosis, personalized treatments, and even robotic surgeries. These systems will analyze medical data to detect diseases earlier, provide tailored recommendations, and carry out precise operations with minimal human intervention. Additionally, AI will empower robots to assist in elderly care, reducing the reliance on human caregivers.',
//             <br />,<br />,
//             'The rise of AI in autonomous robotics will also change industries such as manufacturing, agriculture, and logistics. Robots equipped with AI will handle tasks like assembling products, harvesting crops, and transporting goods autonomously. These advancements will increase productivity, reduce costs, and mitigate risks to human workers.',
//             <br />,<br />,
//             'AI-powered autonomous systems will not only enhance convenience and efficiency but also raise challenges related to ethics, safety, and job displacement. Ensuring that these technologies are used responsibly, securely, and with human oversight will be crucial to their success in shaping the future.'
//           ]    
//     },
//   "ai-in-fintech": {
//     image: "/AI in fintech.webp",
//     title: "AI in Fintech",
//     content:
//        [
//         'In the future, AI will revolutionize the fintech industry by enhancing efficiency, reducing costs, and improving customer experiences. AI-powered algorithms will enable faster and more accurate financial decision-making, helping businesses and individuals manage investments, loans, and savings with greater precision. Through machine learning, AI will identify patterns in financial data to predict market trends, assess risk, and offer personalized financial advice, making financial services more accessible and tailored to individual needs.',
//         <br />,<br />,
//         'In lending, AI will enable quicker credit assessments by analyzing a wider range of data, such as transaction history, social behavior, and alternative data sources, helping lenders make more informed decisions. This will lead to faster loan approvals and better financial inclusion for individuals without traditional credit histories. Similarly, in payments, AI will streamline transaction processes, enhance fraud detection, and reduce security risks by analyzing real-time data and identifying suspicious activities instantly.',
//         <br />,<br />,
//         'AI will also improve customer support through chatbots and virtual assistants, providing 24/7 personalized assistance, answering queries, and helping with tasks such as account management and financial planning. These AI-driven systems will become increasingly sophisticated, allowing them to handle more complex queries and improve customer satisfaction.',
//         <br />,<br />,
//         'However, the rise of AI in fintech will also bring challenges, including concerns about privacy, data security, and ethical considerations in decision-making. As AI continues to evolve, regulatory frameworks will need to adapt to ensure that these technologies are used responsibly, fairly, and transparently.'
//        ]    
//   },
//   "ai-in-entertainment": {
//     image: "/AI in Entertainment.png",
//     title: "AI in Entertainment",
//     content:
//         [
//           'In the future, AI will continue to transform the entertainment and media industries by enabling more personalized, immersive, and efficient experiences for consumers and creators alike. AI algorithms will analyze vast amounts of data, such as viewer preferences, engagement patterns, and content interactions, to recommend tailored content across platforms like streaming services, social media, and news outlets. This will ensure that individuals have access to content that matches their interests, while also helping content creators understand what resonates most with audiences.',
//           <br />,<br />,
//           'AI will also revolutionize content creation by assisting in scriptwriting, video production, and music composition. AI tools will help writers generate ideas, suggest plot developments, and even compose music, reducing the time spent on tedious tasks and allowing creatives to focus on more meaningful aspects of their work. In film and video production, AI-powered tools will streamline post-production processes such as editing, sound design, and visual effects, making high-quality production more accessible and cost-effective.',
//           <br />,<br />,
//           'In gaming, AI will enable more realistic and adaptive experiences by creating intelligent non-player characters (NPCs) that respond dynamically to player actions. This will make games more engaging and immersive, providing players with unique experiences every time they play. AI will also be used to enhance virtual reality (VR) and augmented reality (AR) experiences, offering more lifelike and interactive environments that blur the lines between the digital and physical worlds.',
//           <br />,<br />,
//           'In journalism and media, AI will play a key role in automating news reporting, summarizing events, and even creating personalized news experiences. It will also help identify misinformation and verify facts by analyzing large datasets to ensure the accuracy and credibility of news content. However, as AI becomes more integrated into entertainment and media, challenges around data privacy, deepfakes, and ethical considerations in content creation will need to be addressed to ensure responsible and transparent use of technology.',
//         ]   
//   },
//   "ai-in-environment": {
//       image: "/AI in Environment.jpeg",
//       title: "AI for a Greener Earth",
//       content:
//        [
//         'In the future, AI will play a crucial role in advancing environmental conservation and sustainability efforts. By analyzing vast amounts of environmental data, AI will help predict and monitor climate patterns, weather events, and environmental changes with greater accuracy. This will allow governments, organizations, and researchers to make more informed decisions about managing natural resources, mitigating environmental risks, and responding to the impacts of climate change. AI-powered models will be used to simulate different climate scenarios, aiding in the development of strategies for reducing carbon emissions and adapting to a changing planet.',
//          <br />,<br />,
//          'AI will also drive innovations in energy efficiency, enabling smarter grids and more sustainable energy consumption. By optimizing the use of renewable energy sources like wind, solar, and hydropower, AI can ensure that energy is distributed more efficiently and that waste is minimized. Additionally, AI will assist in the development of new technologies for carbon capture and storage, helping to reduce the amount of CO2 in the atmosphere and slow the progression of global warming.',
//          <br />,<br />,
//          'In agriculture, AI will help promote sustainable farming practices by optimizing irrigation, reducing pesticide use, and improving crop yields. Machine learning algorithms will analyze soil conditions, weather forecasts, and plant health to provide farmers with real-time insights, allowing them to make better decisions about planting and resource management. This will result in more efficient land use and lower environmental impacts from agricultural practices.',
//          <br />,<br />,
//          'AI will also play a significant role in waste management and recycling. By analyzing waste streams, AI can improve sorting processes, ensuring that materials are recycled more effectively and reducing the overall waste sent to landfills. Furthermore, AI will help identify patterns in consumer behavior that contribute to waste generation, offering insights into how to reduce consumption and promote sustainable practices.'
//       ]    
//     },
// };


// type PostsType = typeof posts;

// interface PostPageProps {
//   params: {
//     slug: keyof PostsType;
//   };
// }

// export default function PostPage({ params }: PostPageProps) {
//   const post = posts[params.slug];

//   if (!post) {
//     return <div className="text-center mt-10 text-xl">Post not found</div>;
//   }

//   return (
//     <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10">
//       <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
    
//       <Image
//   src={post.image}
//   alt={post.title}
//   width={800}
//   height={500}
//   className="rounded-lg shadow-md mb-6"
// />
  
// <p className="text-lg text-gray-700 max-w-[800px] text-start">
//   {post.content.map((item, index) => (
//     <span key={index}>{item}</span> // Using `item` as the key if it's unique
//   ))}
// </p>

//       <div className="mt-10 w-full max-w-[800px]">
//         <CommentSection />
//       </div>
//     </div>
//   );
// }




// import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
// import React from 'react';
// import Image from 'next/image';
// import CommentSection from '@/app/components/CommentSection';

// const posts = {"ai-in-healthcare": {
//     image: "/AI in health.jpg",
//     title: "AI in Healthcare",
//     content:
//     [
//       "AI is set to revolutionize the healthcare industry in the future. It will improve diagnostics by analyzing medical images like X-rays and MRIs with greater accuracy and speed, aiding in early disease detection through patterns in data.",
//       <br /> ,<br />,
//       "AI will enable personalized medicine by analyzing genetic information to suggest targeted therapies and adapting treatments based on real-time patient responses. Predictive analytics will allow healthcare providers to assess risks for chronic diseases and predict the spread of infectious diseases, helping in preventive care and epidemic management.",
//       "Virtual health assistants, powered by AI, will enhance patient interactions by answering questions, scheduling appointments, and integrating into telemedicine platforms for real-time diagnostics. AI-powered surgical robots will perform precise surgeries and enable remote operations.",
//       <br />,<br />,
//       "In drug discovery, AI will accelerate research by analyzing vast amounts of data to identify potential treatments, reducing the time and cost of drug trials. Administrative tasks like managing medical records and billing will be automated, increasing efficiency. AI tools will also support mental health care through therapy chatbots and systems that detect symptoms of anxiety and depression.",
//       <br />,<br />,
//       "Wearable AI devices will continuously monitor health metrics and provide real-time alerts for potential issues. While AI promises to make healthcare more accurate, accessible, and affordable, challenges such as data privacy, algorithm bias, and integration with existing systems need to be addressed. Combining AI’s capabilities with human expertise will transform healthcare, focusing on prevention, early diagnosis, and personalized treatment to improve lives.",
//     ],
//   },
//   "ai-in-education": {
//       image: "/AI in education.jpg",
//       title: "AI in Learning",
//       content:
//       [
//         'AI is expected to transform education and e-learning by personalizing learning experiences to match individual student needs. Intelligent tutoring systems will analyze student performance and provide tailored feedback and recommendations, helping learners progress at their own pace. AI-powered tools will enhance accessibility by offering real-time translation, voice-to-text features, and adaptive learning environments for students with disabilities.',
//         <br />,<br />,
//         'The use of AI in automated grading will save educators time, allowing them to focus on teaching and mentoring. Virtual reality combined with AI will create immersive learning experiences, enabling students to explore complex topics interactively, such as historical events or scientific experiments. Predictive analytics will help educators identify at-risk students early and implement interventions to improve outcomes.',
//         <br />,<br />,
//         'AI chatbots will serve as 24/7 learning assistants, answering student queries and providing additional resources instantly. Instructors will benefit from AI-driven content creation tools that generate quizzes, lesson plans, and summaries based on specific learning objectives. AI will also play a role in bridging language barriers, offering personalized language learning solutions, and supporting global collaboration in education.',
//         <br />,<br />,
//         'By continuously analyzing data and improving algorithms, AI will make education more adaptive, inclusive, and efficient. While challenges like data privacy and equitable access need to be addressed, AI has the potential to democratize learning, empowering students and educators around the world.',
//       ]
//            },
//            "ai-in-autonomous": {
//       image: "/AI in Autonomous.jpeg",
//       title: "AI on Wheels",
//       content:
//           [
//             'Artificial intelligence (AI) will play a transformative role in the development of autonomous systems in the future, particularly in areas like transportation, healthcare, and robotics. In autonomous vehicles, AI algorithms will continue to advance, enabling cars to make real-time decisions based on sensor data, such as camera images and radar signals. This will improve safety, efficiency, and reduce human error, potentially leading to fully autonomous cars on the roads.',
//             <br />,<br />,
//             'In healthcare, AI-driven autonomous systems will assist in diagnosis, personalized treatments, and even robotic surgeries. These systems will analyze medical data to detect diseases earlier, provide tailored recommendations, and carry out precise operations with minimal human intervention. Additionally, AI will empower robots to assist in elderly care, reducing the reliance on human caregivers.',
//             <br />,<br />,
//             'The rise of AI in autonomous robotics will also change industries such as manufacturing, agriculture, and logistics. Robots equipped with AI will handle tasks like assembling products, harvesting crops, and transporting goods autonomously. These advancements will increase productivity, reduce costs, and mitigate risks to human workers.',
//             <br />,<br />,
//             'AI-powered autonomous systems will not only enhance convenience and efficiency but also raise challenges related to ethics, safety, and job displacement. Ensuring that these technologies are used responsibly, securely, and with human oversight will be crucial to their success in shaping the future.'
//           ]    
//     },
//   "ai-in-fintech": {
//     image: "/AI in fintech.webp",
//     title: "AI in Fintech",
//     content:
//        [
//         'In the future, AI will revolutionize the fintech industry by enhancing efficiency, reducing costs, and improving customer experiences. AI-powered algorithms will enable faster and more accurate financial decision-making, helping businesses and individuals manage investments, loans, and savings with greater precision. Through machine learning, AI will identify patterns in financial data to predict market trends, assess risk, and offer personalized financial advice, making financial services more accessible and tailored to individual needs.',
//         <br />,<br />,
//         'In lending, AI will enable quicker credit assessments by analyzing a wider range of data, such as transaction history, social behavior, and alternative data sources, helping lenders make more informed decisions. This will lead to faster loan approvals and better financial inclusion for individuals without traditional credit histories. Similarly, in payments, AI will streamline transaction processes, enhance fraud detection, and reduce security risks by analyzing real-time data and identifying suspicious activities instantly.',
//         <br />,<br />,
//         'AI will also improve customer support through chatbots and virtual assistants, providing 24/7 personalized assistance, answering queries, and helping with tasks such as account management and financial planning. These AI-driven systems will become increasingly sophisticated, allowing them to handle more complex queries and improve customer satisfaction.',
//         <br />,<br />,
//         'However, the rise of AI in fintech will also bring challenges, including concerns about privacy, data security, and ethical considerations in decision-making. As AI continues to evolve, regulatory frameworks will need to adapt to ensure that these technologies are used responsibly, fairly, and transparently.'
//        ]    
//   },
//   "ai-in-entertainment": {
//     image: "/AI in Entertainment.png",
//     title: "AI in Entertainment",
//     content:
//         [
//           'In the future, AI will continue to transform the entertainment and media industries by enabling more personalized, immersive, and efficient experiences for consumers and creators alike. AI algorithms will analyze vast amounts of data, such as viewer preferences, engagement patterns, and content interactions, to recommend tailored content across platforms like streaming services, social media, and news outlets. This will ensure that individuals have access to content that matches their interests, while also helping content creators understand what resonates most with audiences.',
//           <br />,<br />,
//           'AI will also revolutionize content creation by assisting in scriptwriting, video production, and music composition. AI tools will help writers generate ideas, suggest plot developments, and even compose music, reducing the time spent on tedious tasks and allowing creatives to focus on more meaningful aspects of their work. In film and video production, AI-powered tools will streamline post-production processes such as editing, sound design, and visual effects, making high-quality production more accessible and cost-effective.',
//           <br />,<br />,
//           'In gaming, AI will enable more realistic and adaptive experiences by creating intelligent non-player characters (NPCs) that respond dynamically to player actions. This will make games more engaging and immersive, providing players with unique experiences every time they play. AI will also be used to enhance virtual reality (VR) and augmented reality (AR) experiences, offering more lifelike and interactive environments that blur the lines between the digital and physical worlds.',
//           <br />,<br />,
//           'In journalism and media, AI will play a key role in automating news reporting, summarizing events, and even creating personalized news experiences. It will also help identify misinformation and verify facts by analyzing large datasets to ensure the accuracy and credibility of news content. However, as AI becomes more integrated into entertainment and media, challenges around data privacy, deepfakes, and ethical considerations in content creation will need to be addressed to ensure responsible and transparent use of technology.',
//         ]   
//   },
//   "ai-in-environment": {
//       image: "/AI in Environment.jpeg",
//       title: "AI for a Greener Earth",
//       content:
//        [
//         'In the future, AI will play a crucial role in advancing environmental conservation and sustainability efforts. By analyzing vast amounts of environmental data, AI will help predict and monitor climate patterns, weather events, and environmental changes with greater accuracy. This will allow governments, organizations, and researchers to make more informed decisions about managing natural resources, mitigating environmental risks, and responding to the impacts of climate change. AI-powered models will be used to simulate different climate scenarios, aiding in the development of strategies for reducing carbon emissions and adapting to a changing planet.',
//          <br />,<br />,
//          'AI will also drive innovations in energy efficiency, enabling smarter grids and more sustainable energy consumption. By optimizing the use of renewable energy sources like wind, solar, and hydropower, AI can ensure that energy is distributed more efficiently and that waste is minimized. Additionally, AI will assist in the development of new technologies for carbon capture and storage, helping to reduce the amount of CO2 in the atmosphere and slow the progression of global warming.',
//          <br />,<br />,
//          'In agriculture, AI will help promote sustainable farming practices by optimizing irrigation, reducing pesticide use, and improving crop yields. Machine learning algorithms will analyze soil conditions, weather forecasts, and plant health to provide farmers with real-time insights, allowing them to make better decisions about planting and resource management. This will result in more efficient land use and lower environmental impacts from agricultural practices.',
//          <br />,<br />,
//          'AI will also play a significant role in waste management and recycling. By analyzing waste streams, AI can improve sorting processes, ensuring that materials are recycled more effectively and reducing the overall waste sent to landfills. Furthermore, AI will help identify patterns in consumer behavior that contribute to waste generation, offering insights into how to reduce consumption and promote sustainable practices.'
//       ]    
//     },
//   // Other posts can be added here
// };

// type PostsType = typeof posts;

// interface PostPageProps {
//   params: {
//     slug: keyof PostsType;
//   };
// }

// const PostPage: NextPage<PostPageProps> = ({ params }) => {
//   const post = posts[params.slug];

//   if (!post) {
//     return <div className="text-center mt-10 text-xl">Post not found</div>;
//   }

//   return (
//     <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10">
//       <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
//       <Image
//         src={post.image}
//         alt={post.title}
//         width={800}
//         height={500}
//         className="rounded-lg shadow-md mb-6"
//       />
//       <p className="text-lg text-gray-700 max-w-[800px] text-start">
//         {post.content.map((item, index) => (
//           <span key={index}>{item}</span>
//         ))}
//       </p>
//       <div className="mt-10 w-full max-w-[800px]">
//         <CommentSection />
//       </div>
//     </div>
//   );
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = Object.keys(posts).map((slug) => ({ params: { slug } }));
//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps = async (context) => {
//   return {
//     props: {
//       params: context.params as { slug: keyof PostsType },
//     },
//   };
// };

// export default PostPage;


import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import CommentSection from '@/app/components/CommentSection';

const posts = {
  "ai-in-healthcare": {
    image: "/AI in health.jpg",
    title: "AI in Healthcare",
    content:
    [
      "AI is set to revolutionize the healthcare industry in the future. It will improve diagnostics by analyzing medical images like X-rays and MRIs with greater accuracy and speed, aiding in early disease detection through patterns in data.",
      <br /> ,<br />,
      "AI will enable personalized medicine by analyzing genetic information to suggest targeted therapies and adapting treatments based on real-time patient responses. Predictive analytics will allow healthcare providers to assess risks for chronic diseases and predict the spread of infectious diseases, helping in preventive care and epidemic management.",
      "Virtual health assistants, powered by AI, will enhance patient interactions by answering questions, scheduling appointments, and integrating into telemedicine platforms for real-time diagnostics. AI-powered surgical robots will perform precise surgeries and enable remote operations.",
      <br />,<br />,
      "In drug discovery, AI will accelerate research by analyzing vast amounts of data to identify potential treatments, reducing the time and cost of drug trials. Administrative tasks like managing medical records and billing will be automated, increasing efficiency. AI tools will also support mental health care through therapy chatbots and systems that detect symptoms of anxiety and depression.",
      <br />,<br />,
      "Wearable AI devices will continuously monitor health metrics and provide real-time alerts for potential issues. While AI promises to make healthcare more accurate, accessible, and affordable, challenges such as data privacy, algorithm bias, and integration with existing systems need to be addressed. Combining AI’s capabilities with human expertise will transform healthcare, focusing on prevention, early diagnosis, and personalized treatment to improve lives.",
    ],
  },
  "ai-in-education": {
      image: "/AI in education.jpg",
      title: "AI in Learning",
      content:
      [
        'AI is expected to transform education and e-learning by personalizing learning experiences to match individual student needs. Intelligent tutoring systems will analyze student performance and provide tailored feedback and recommendations, helping learners progress at their own pace. AI-powered tools will enhance accessibility by offering real-time translation, voice-to-text features, and adaptive learning environments for students with disabilities.',
        <br />,<br />,
        'The use of AI in automated grading will save educators time, allowing them to focus on teaching and mentoring. Virtual reality combined with AI will create immersive learning experiences, enabling students to explore complex topics interactively, such as historical events or scientific experiments. Predictive analytics will help educators identify at-risk students early and implement interventions to improve outcomes.',
        <br />,<br />,
        'AI chatbots will serve as 24/7 learning assistants, answering student queries and providing additional resources instantly. Instructors will benefit from AI-driven content creation tools that generate quizzes, lesson plans, and summaries based on specific learning objectives. AI will also play a role in bridging language barriers, offering personalized language learning solutions, and supporting global collaboration in education.',
        <br />,<br />,
        'By continuously analyzing data and improving algorithms, AI will make education more adaptive, inclusive, and efficient. While challenges like data privacy and equitable access need to be addressed, AI has the potential to democratize learning, empowering students and educators around the world.',
      ]
           },
           "ai-in-autonomous": {
      image: "/AI in Autonomous.jpeg",
      title: "AI on Wheels",
      content:
          [
            'Artificial intelligence (AI) will play a transformative role in the development of autonomous systems in the future, particularly in areas like transportation, healthcare, and robotics. In autonomous vehicles, AI algorithms will continue to advance, enabling cars to make real-time decisions based on sensor data, such as camera images and radar signals. This will improve safety, efficiency, and reduce human error, potentially leading to fully autonomous cars on the roads.',
            <br />,<br />,
            'In healthcare, AI-driven autonomous systems will assist in diagnosis, personalized treatments, and even robotic surgeries. These systems will analyze medical data to detect diseases earlier, provide tailored recommendations, and carry out precise operations with minimal human intervention. Additionally, AI will empower robots to assist in elderly care, reducing the reliance on human caregivers.',
            <br />,<br />,
            'The rise of AI in autonomous robotics will also change industries such as manufacturing, agriculture, and logistics. Robots equipped with AI will handle tasks like assembling products, harvesting crops, and transporting goods autonomously. These advancements will increase productivity, reduce costs, and mitigate risks to human workers.',
            <br />,<br />,
            'AI-powered autonomous systems will not only enhance convenience and efficiency but also raise challenges related to ethics, safety, and job displacement. Ensuring that these technologies are used responsibly, securely, and with human oversight will be crucial to their success in shaping the future.'
          ]    
    },
  "ai-in-fintech": {
    image: "/AI in fintech.webp",
    title: "AI in Fintech",
    content:
       [
        'In the future, AI will revolutionize the fintech industry by enhancing efficiency, reducing costs, and improving customer experiences. AI-powered algorithms will enable faster and more accurate financial decision-making, helping businesses and individuals manage investments, loans, and savings with greater precision. Through machine learning, AI will identify patterns in financial data to predict market trends, assess risk, and offer personalized financial advice, making financial services more accessible and tailored to individual needs.',
        <br />,<br />,
        'In lending, AI will enable quicker credit assessments by analyzing a wider range of data, such as transaction history, social behavior, and alternative data sources, helping lenders make more informed decisions. This will lead to faster loan approvals and better financial inclusion for individuals without traditional credit histories. Similarly, in payments, AI will streamline transaction processes, enhance fraud detection, and reduce security risks by analyzing real-time data and identifying suspicious activities instantly.',
        <br />,<br />,
        'AI will also improve customer support through chatbots and virtual assistants, providing 24/7 personalized assistance, answering queries, and helping with tasks such as account management and financial planning. These AI-driven systems will become increasingly sophisticated, allowing them to handle more complex queries and improve customer satisfaction.',
        <br />,<br />,
        'However, the rise of AI in fintech will also bring challenges, including concerns about privacy, data security, and ethical considerations in decision-making. As AI continues to evolve, regulatory frameworks will need to adapt to ensure that these technologies are used responsibly, fairly, and transparently.'
       ]    
  },
  "ai-in-entertainment": {
    image: "/AI in Entertainment.png",
    title: "AI in Entertainment",
    content:
        [
          'In the future, AI will continue to transform the entertainment and media industries by enabling more personalized, immersive, and efficient experiences for consumers and creators alike. AI algorithms will analyze vast amounts of data, such as viewer preferences, engagement patterns, and content interactions, to recommend tailored content across platforms like streaming services, social media, and news outlets. This will ensure that individuals have access to content that matches their interests, while also helping content creators understand what resonates most with audiences.',
          <br />,<br />,
          'AI will also revolutionize content creation by assisting in scriptwriting, video production, and music composition. AI tools will help writers generate ideas, suggest plot developments, and even compose music, reducing the time spent on tedious tasks and allowing creatives to focus on more meaningful aspects of their work. In film and video production, AI-powered tools will streamline post-production processes such as editing, sound design, and visual effects, making high-quality production more accessible and cost-effective.',
          <br />,<br />,
          'In gaming, AI will enable more realistic and adaptive experiences by creating intelligent non-player characters (NPCs) that respond dynamically to player actions. This will make games more engaging and immersive, providing players with unique experiences every time they play. AI will also be used to enhance virtual reality (VR) and augmented reality (AR) experiences, offering more lifelike and interactive environments that blur the lines between the digital and physical worlds.',
          <br />,<br />,
          'In journalism and media, AI will play a key role in automating news reporting, summarizing events, and even creating personalized news experiences. It will also help identify misinformation and verify facts by analyzing large datasets to ensure the accuracy and credibility of news content. However, as AI becomes more integrated into entertainment and media, challenges around data privacy, deepfakes, and ethical considerations in content creation will need to be addressed to ensure responsible and transparent use of technology.',
        ]   
  },
  "ai-in-environment": {
      image: "/AI in Environment.jpeg",
      title: "AI for a Greener Earth",
      content:
       [
        'In the future, AI will play a crucial role in advancing environmental conservation and sustainability efforts. By analyzing vast amounts of environmental data, AI will help predict and monitor climate patterns, weather events, and environmental changes with greater accuracy. This will allow governments, organizations, and researchers to make more informed decisions about managing natural resources, mitigating environmental risks, and responding to the impacts of climate change. AI-powered models will be used to simulate different climate scenarios, aiding in the development of strategies for reducing carbon emissions and adapting to a changing planet.',
         <br />,<br />,
         'AI will also drive innovations in energy efficiency, enabling smarter grids and more sustainable energy consumption. By optimizing the use of renewable energy sources like wind, solar, and hydropower, AI can ensure that energy is distributed more efficiently and that waste is minimized. Additionally, AI will assist in the development of new technologies for carbon capture and storage, helping to reduce the amount of CO2 in the atmosphere and slow the progression of global warming.',
         <br />,<br />,
         'In agriculture, AI will help promote sustainable farming practices by optimizing irrigation, reducing pesticide use, and improving crop yields. Machine learning algorithms will analyze soil conditions, weather forecasts, and plant health to provide farmers with real-time insights, allowing them to make better decisions about planting and resource management. This will result in more efficient land use and lower environmental impacts from agricultural practices.',
         <br />,<br />,
         'AI will also play a significant role in waste management and recycling. By analyzing waste streams, AI can improve sorting processes, ensuring that materials are recycled more effectively and reducing the overall waste sent to landfills. Furthermore, AI will help identify patterns in consumer behavior that contribute to waste generation, offering insights into how to reduce consumption and promote sustainable practices.'
      ]    
    },
  // Add more posts here
};

type PostsType = typeof posts;

interface PostPageProps {
  params: {
    slug: keyof PostsType;
  };
}

// Generate dynamic metadata for each post
export const generateMetadata = ({ params }: PostPageProps): Metadata => {
  const post = posts[params.slug];
  return {
    title: post ? post.title : "Post not found",
  };
};

// Generate static paths for dynamic routes
export const generateStaticParams = () => {
  return Object.keys(posts).map((slug) => ({ slug }));
};

const PostPage = ({ params }: PostPageProps) => {
  const post = posts[params.slug];

  if (!post) {
    return <div className="text-center mt-10 text-xl">Post not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <Image
        src={post.image}
        alt={post.title}
        width={800}
        height={500}
        className="rounded-lg shadow-md mb-6"
      />
      <p className="text-lg text-gray-700 max-w-[800px] text-start">
        {post.content.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </p>
      <div className="mt-10 w-full max-w-[800px]">
        <CommentSection />
      </div>
    </div>
  );
};

export default PostPage;
