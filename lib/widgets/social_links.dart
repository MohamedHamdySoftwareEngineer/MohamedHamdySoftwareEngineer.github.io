import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import '../utils/constants.dart';

class SocialLinks extends StatelessWidget {
  const SocialLinks({super.key});

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        _buildSocialButton(
          icon: FontAwesomeIcons.envelope,
          onTap: () => _launchUrl('mailto:${AppConstants.email}'),
        ),
        const SizedBox(width: 15),
        _buildSocialButton(
          icon: FontAwesomeIcons.github,
          onTap: () => _launchUrl(AppConstants.github),
        ),
        const SizedBox(width: 15),
        _buildSocialButton(
          icon: FontAwesomeIcons.linkedin,
          onTap: () => _launchUrl(AppConstants.linkedin),
        ),
        const SizedBox(width: 15),
        _buildSocialButton(
          icon: FontAwesomeIcons.whatsapp,
          onTap: () => _launchUrl(AppConstants.whatsapp),
        ),
      
      ],
    );
  }

  Widget _buildSocialButton({
    required IconData icon,
    required VoidCallback onTap,
  }) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        width: 45,
        height: 45,
        decoration: BoxDecoration(
          color: Colors.white.withOpacity(0.2),
          borderRadius: BorderRadius.circular(25),
        ),
        child: Icon(
          icon,
          color: Colors.white,
          size: 22,
        ),
      ),
    );
  }

  Future<void> _launchUrl(String url) async {
    final Uri uri = Uri.parse(url);
    if (!await launchUrl(uri)) {
      throw Exception('Could not launch $url');
    }
  }
}