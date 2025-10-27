import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import '../utils/constants.dart';
import 'social_links.dart';

class HeaderSection extends StatelessWidget {
  const HeaderSection({super.key});

  Future<void> _downloadCV() async { 
    const cvUrl = 'https://drive.google.com/file/d/1axmseIndXjPW_fiSKQosACurOq4QMisE/view?usp=drive_link';
                   
    final Uri url = Uri.parse(cvUrl);
    
    if (await canLaunchUrl(url)) {
      await launchUrl(url, mode: LaunchMode.externalApplication);
    } else {
      debugPrint('Could not launch $cvUrl');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [AppColors.primary, AppColors.primaryDark],
        ),
      ),
      child: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            children: [
              const SizedBox(height: 40),
              // Profile Picture
              Container(
                width: 150,
                height: 150,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: AppColors.bgLight,
                  border: Border.all(
                    color: Colors.white.withOpacity(0.3),
                    width: 5,
                  ),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black.withOpacity(0.2),
                      blurRadius: 20,
                      offset: const Offset(0, 10),
                    ),
                  ],
                ),
                child: ClipOval(
                  child: Image.asset(
                    'assets/images/my photo.jpg',
                    fit: BoxFit.cover,
                    errorBuilder: (context, error, stackTrace) {
                      return const Icon(
                        Icons.person,
                        size: 60,
                        color: AppColors.primary,
                      );
                    },
                  ),
                ),
              ),
              const SizedBox(height: 20),
              // Name
              const Text(
                'Mohamed Hamdy',
                style: TextStyle(
                  fontSize: 40,
                  fontWeight: FontWeight.w600,
                  color: Colors.white,
                ),
              ),
              const SizedBox(height: 10),
              // Title Badge
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                decoration: BoxDecoration(
                  color: Colors.white.withOpacity(0.2),
                  borderRadius: BorderRadius.circular(20),
                ),
                child: const Text(
                  'Cross Platform Flutter Developer',
                  style: TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.w500,
                  ),
                ),
              ),
              const SizedBox(height: 20),
              // Bio
              const Padding(
                padding: EdgeInsets.symmetric(horizontal: 20),
                child: Text(
                  'I am a Flutter developer skilled in building high-performance, scalable mobile apps with Dart and BLoC state management.'
                  ' I focus on clean architecture, responsive UIs, and seamless integration',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 16,
                    height: 1.6,
                  ),
                ),
              ),
              const SizedBox(height: 30),
              // Download CV Button
              downloadCVButton(),
              const SizedBox(height: 30),
              // Social Links
              const SocialLinks(),
              const SizedBox(height: 40),
            ],
          ),
        ),
      ),
    );
  }

  Container downloadCVButton() {
    return Container(
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(35),
                gradient: const LinearGradient(
                  colors: [Colors.white, Color(0xFFF5F5F5)],
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                ),
                boxShadow: [
                  BoxShadow(
                    color: Colors.black.withOpacity(0.25),
                    blurRadius: 20,
                    offset: const Offset(0, 10),
                    spreadRadius: 0,
                  ),
                  BoxShadow(
                    color: Colors.white.withOpacity(0.3),
                    blurRadius: 15,
                    offset: const Offset(0, -5),
                    spreadRadius: 0,
                  ),
                ],
              ),
              child: Material(
                color: Colors.transparent,
                child: InkWell(
                  onTap: _downloadCV,
                  borderRadius: BorderRadius.circular(35),
                  splashColor: AppColors.primary.withOpacity(0.2),
                  highlightColor: AppColors.primary.withOpacity(0.1),
                  child: Container(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 35,
                      vertical: 14,
                    ),
                    child: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                     
                        const Text(
                          'Download CV',
                          style: TextStyle(
                            fontSize: 17,
                            fontWeight: FontWeight.w700,
                            color: AppColors.primary,
                            letterSpacing: 0.5,
                          ),
                        ),
                        const SizedBox(width: 8),
                        Icon(
                          Icons.arrow_forward_rounded,
                          color: AppColors.primary.withOpacity(0.7),
                          size: 20,
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            );
  }
}