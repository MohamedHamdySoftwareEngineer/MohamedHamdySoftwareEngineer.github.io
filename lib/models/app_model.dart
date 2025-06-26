class AppModel {
  final String title;
  final String description;
  final List<String> techTags;
  final String mainImage;
  final List<String> screenshots;
  final String githubUrl;

  AppModel({
    required this.title,
    required this.description,
    required this.techTags,
    required this.mainImage,
    required this.screenshots,
    required this.githubUrl,
  });
}