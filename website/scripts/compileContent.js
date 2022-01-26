const fs = require("fs");
const path = require("path");

const config = {
  outputFileArgName: "--output-file",
  contentDirs: ["../../general", "../../algorithms", "../../data-structures"],
  infoFileSuffix: "-info.txt",
  languageExtensions: ["js", "ts", "java", "cs", "py"]
};

/**
 * Parse command line arguments for output filepath.
 */
const outputFilepath = process.argv.find((arg, index, args) => {
  if (index > 0) {
    const prevArg = args[index - 1];

    if (prevArg === config.outputFileArgName) {
      return !!arg;
    }
  }
});

// Throw error if the output file path argument is missing
if (!outputFilepath) {
  throw new Error(`Missing ${config.outputFileArgName} argument`);
}

// Run the compiler
compileContent();

function compileContent() {
  const content = [];

  // Loop through the content directories
  config.contentDirs.forEach(contentDir => {
    // Get all of the sub-directory names
    const subDirs = getDirectories(contentDir);

    subDirs.forEach(subDir => {
      const resourceContent = {};

      // Set the raw resource name
      resourceContent.resource = subDir;

      // Set the resource name in title case
      resourceContent.name = kebabToTitleCase(subDir);

      // Set the resource type
      resourceContent.type = contentDir
        .split("/")
        .slice(-1)
        .pop();

      resourceContent.resource = subDir;

      const subDirPath = `${contentDir}/${subDir}`;

      const infoFilePath = `${subDirPath}/${subDir}${config.infoFileSuffix}`;

      // Read the info file, if one exists
      const infoFileContent = getFileContent(infoFilePath);

      resourceContent.info = infoFileContent;

      /**
       * For each valid extension, attempt to read the associated file.
       *
       * It's expected that the name of the file is in the following format:
       *
       * <directory-name>.<language-extension>
       */
      config.languageExtensions.forEach(languageExtension => {
        const languageFilepath = `${subDirPath}/${subDir}.${languageExtension}`;

        const languageFileContent = getFileContent(languageFilepath);

        resourceContent[languageExtension] = languageFileContent;
      });

      content.push(resourceContent);
    });
  });

  // Export the content object to a new JSON file
  exportToFile(outputFilepath, content);
}

function getDirectories(dirPath) {
  const resolvedPath = path.resolve(__dirname, dirPath);

  return fs
    .readdirSync(resolvedPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
}

function getFileContent(filepath) {
  const resolvedFilepath = path.resolve(__dirname, filepath);

  if (doesFileExist(resolvedFilepath)) {
    return fs.readFileSync(resolvedFilepath, "utf8").trim();
  }
}

function doesFileExist(filepath) {
  try {
    fs.accessSync(filepath, fs.constants.F_OK);
    return true;
  } catch (e) {
    return false;
  }
}

function kebabToTitleCase(string) {
  return string
    .split("-")
    .map(str => str.charAt(0).toUpperCase() + str.substr(1).toLowerCase())
    .join(" ");
}

function exportToFile(filepath, object) {
  const resolvedFilepath = path.resolve(__dirname, filepath);

  fs.writeFileSync(resolvedFilepath, JSON.stringify(object));
}
