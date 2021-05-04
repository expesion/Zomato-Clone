import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ResultShowScreen from "./src/screens/ResultShowScreen";

import SearchScreen from "./src/screens/SearchScreen";

const AppNavigator = createStackNavigator(
  {
    Search: SearchScreen,
    Results: ResultShowScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "SaveZY",
    },
  }
);

export default createAppContainer(AppNavigator);
