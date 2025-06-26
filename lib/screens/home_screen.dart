import 'package:flutter/material.dart';
import '../widgets/header_section.dart';
import '../widgets/app_showcase.dart';
import '../models/app_model.dart';
import '../utils/constants.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final List<AppModel> apps = [
      AppModel(
        title: 'Education and Nutrition',
        description: 'A graduation project mobile app for an advanced system for education and nutrition, designed to provide personalized educational content and nutritional guidance.',
        techTags: ['Flutter', 'Dart', 'BLoC', 'REST API' , 'MVVM Pattern', 'Git','Github',],
        mainImage: 'assets/images/EduNourish/splash_screen.jpg',
        screenshots: [
          'assets/images/EduNourish/Home Screen.png',
          'assets/images/EduNourish/Student Screen.png',
          'assets/images/EduNourish/Notifications.png',
          'assets/images/EduNourish/Map.png',
           'assets/images/EduNourish/Payment.png',
          'assets/images/EduNourish/Restaurant.png',
          'assets/images/EduNourish/Restaurant_Details.png',
          'assets/images/EduNourish/Attendance.png',       
        ],
        githubUrl: 'https://github.com/MohamedHamdySoftwareEngineer/Education-Nourish_Parent-Interface',
      ),
      AppModel(
        title: 'NovaEd',
        description: 'An educational high school mobile app that is an intelligent tool that generates customized test questions, empowering educators to assess student learning with ease.',
        techTags: ['Flutter', 'Dart', 'API Integration', 'MVVM Pattern','Cubit','Google Sign in', 'Git','Github'],
        mainImage: 'assets/images/NovaEd/splash_screen.jpg',
        screenshots: [
          'assets/images/NovaEd/login_screen.jpg',
          'assets/images/NovaEd/home_screen.jpg',
          'assets/images/NovaEd/choice_screen.jpg',
          'assets/images/NovaEd/quiz_screen.jpg',
          'assets/images/NovaEd/profile_screen.jpg',
        ],
        githubUrl: 'https://github.com/MohamedHamdySoftwareEngineer/NovaEd',
      ),
      AppModel(
        title: 'Examuiz',
        description: 'A mobile app that uses artificial intelligence to help create personalized exams and analyze student performance.',
        techTags: ['Flutter', 'Dart', 'AI Integration', 'REST API', 'Git', 'Github'],
        mainImage: 'assets/images/Examuiz/splash_screen.jpg',
        screenshots: [
          'assets/images/Examuiz/home_screen.jpg',
          'assets/images/Examuiz/generate_exam_screen.jpg',
          'assets/images/Examuiz/exam_parameters.jpg',
          'assets/images/Examuiz/exam_opening.jpg',
          'assets/images/Examuiz/the_generated_exam.jpg',
          'assets/images/Examuiz/exam_analysis_screen.jpg',
          'assets/images/Examuiz/analysis_result_1.jpg',
          'assets/images/Examuiz/analysis_result_2.jpg',
          'assets/images/Examuiz/analysis_result_3.jpg',
          'assets/images/Examuiz/analysis_result_4.jpg',
        ],
        githubUrl: 'https://github.com/MohamedHamdySoftwareEngineer/Examuiz',
      ),
    ];

    return Scaffold(
      backgroundColor: AppColors.bgDark,
      body: SingleChildScrollView(
        child: Column(
          children: [
            // Header Section
            const HeaderSection(),
            // Portfolio Section
            Padding(
              padding: const EdgeInsets.all(20),
              child: Column(
                children: [
                  const SizedBox(height: 40),
                  // Section Header
                  Column(
                    children: [
                      Text(
                        'MY MOBILE APPLICATIONS',
                        style: TextStyle(
                          fontSize: 38,
                          fontWeight: FontWeight.w700,
                          color: AppColors.primaryDark,
                          letterSpacing: 1,
                        ),
                      ),
                      const SizedBox(height: 15),
                      Container(
                        width: 80,
                        height: 4,
                        decoration: BoxDecoration(
                          gradient: const LinearGradient(
                            colors: [AppColors.primaryDark, AppColors.accent],
                          ),
                          borderRadius: BorderRadius.circular(2),
                        ),
                      ),
                      const SizedBox(height: 15),
                      const Text(
                        'A showcase of my latest and most significant Flutter applications, demonstrating my skills in mobile development.',
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          color: AppColors.textSecondary,
                          fontSize: 18,
                          height: 1.6,
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 50),
                  // Apps List
                  // spread operator equivalent to for loop
                  ...apps.map((app) => AppShowcase(app: app)),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}