export default {
    autoNavigate: () => {
        let intervalId;

        const navigateEvery30Minutes = () => {
            navigateTo('Page2'); // Replace 'Page2' with the actual page name or URL
        };

        intervalId = setInterval(navigateEvery30Minutes, 30 * 60 * 1000);

        // If you want to stop the automatic navigation, you can use clearInterval like this:
        // clearInterval(intervalId);
    }
};
