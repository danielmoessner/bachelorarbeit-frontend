module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\js$": "babel-jest",
    "^.+\\.ts$": "babel-jest",
  },
  moduleFileExtensions: ["vue", "js", "ts"],
  moduleNameMapper: {
    "@/components/(.*)$": "<rootDir>/src/components/$1",
    "@/composables/(.*)$": "<rootDir>/src/composables/$1",
    "@/helpers/(.*)$": "<rootDir>/src/helpers/$1",
    "@/mixins/(.*)$": "<rootDir>/src/mixins/$1",
    "@/router/(.*)$": "<rootDir>/src/router/$1",
    "@/services/(.*)$": "<rootDir>/src/services/$1",
    "@/store/(.*)$": "<rootDir>/src/store/$1",
    "@/views/(.*)$": "<rootDir>/src/views/$1",
    "@/axios$": "<rootDir>/src/axios",
  },
};
