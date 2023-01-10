export default class BrowserService {

  public static isMobile(): boolean {
    try {
      return window.screen.width <= 414;
    } catch (error) {
      return false;
    }
  }

}
