const {defaults} = require('jest-config');
module.exports = {
    verbose: true,
    automock: true,
    modulePaths: ["/shared/vendor/modules"],
    moduleFileExtensions: ["js", "jsx"],
    moduleDirectories: ["node_modules", "bower_components", "shared"],
    moduleNameMapper: {
            "\\.(css|less)$ ":"<rootDir>/__mocks__/styleMock.js",
            "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js",
      
            "^react(.*)$": "<rootDir>/vendor/react-master$1",
            "^config$": "<rootDir>/configs/app-config.js"
    }
          
};