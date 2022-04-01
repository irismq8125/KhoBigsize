import {createNavigationContainerRef} from '@react-navigation/native';

export const RootNavigation = createNavigationContainerRef();
export function navigate(name, params) {
  if (RootNavigation.isReady()) {
    RootNavigation.navigate(name, params);
  }
  else
  {
    console.log('khong co');
  }
}
export function goBack() {
  if (RootNavigation.isReady()) {
    RootNavigation.goBack();
  }
}

