import 'package:flutter/material.dart';
import 'screens/home_screen.dart';
import 'utils/constants.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      // title: 'Mohamed Hamdy | Flutter Developer',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        // textTheme: GoogleFonts.robotoTextTheme(),
        colorScheme: ColorScheme.fromSeed(
          seedColor: AppColors.primary,
          brightness: Brightness.light,
        ),
        useMaterial3: true,// enable good look design 
      ),
      home: const HomeScreen(),
      debugShowCheckedModeBanner: false,
    );
  }
}