import appInsights from "applicationinsights";
appInsights.setup('7a51ca3b-612e-41c0-afca-dd80c05fba68')
    .setAutoCollectRequests(true)
    .setAutoCollectPerformance(true, true)
    .setAutoCollectExceptions(true)
    .setAutoCollectDependencies(true)
    .setAutoCollectConsole(true)
    .setUseDiskRetryCaching(true)
    .setSendLiveMetrics(false)
    .start();

export { appInsights }