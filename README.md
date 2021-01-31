
# BC-provinical-grade-visualizer


## Initlization:

Installing depencides -> npm install

Start server: nodemon app.js


## API Reference:

The following are all HTTP GET methods:

Note: Encode to URI before running the get methods.

| Endpoint        |Example| Description  |
| ------------- |-------------| -----|
| /grades/:school_name/:year/:subject/:gender      | api/grades/Richmond%20Secondary/2017%2F2018/English%2012/MALE | Returns the grade info for one subject and one populuation.  |
|/grades/:school_name/:year/:subject   | api/grades/Richmond%20Secondary/2017%2F2018/Communications%2012/      |   Returns the grade info for one subject and all population. |
| /grades/:school_name/:year | api/grades/Richmond%20Secondary/2017%2F2018/      |   Returns the grade info for all subjects and all population.|
| /grades/:school_name/ | api/grades/Richmond%20Secondary/      |   Returns the grade info for all year for one school.|
 
