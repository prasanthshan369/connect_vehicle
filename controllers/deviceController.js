const db = require("../db/DbConnection");
var sql = "";
const GetDevice = (req, res) => {
  var user_id = req.query.user_id;
  console.log(user_id);
  sql = `select * from vehicleconnect_devices where user_id="${user_id}"`;
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error executing SQL query:", err);
      return res
        .status(500)
        .json({
          success: false,
          message: "Error retrieving data from the database",
        });
    }

    if (results.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No devices found for the user" });
    }

    // If data is found, return success response with the result
    res.json({
      success: true,
      message: "Data retrieved successfully",
      result: results[0],
    });
  });
};
const leastDevice=(req,res)=>{
    var device_id=req.query.device_id
    sql=`select * from vehicleconnect_data where device_id="${device_id}"`
    db.query(sql, (err, results) => {
        if (err) {
          console.error("Error executing SQL query:", err);
          return res
            .status(500)
            .json({
              success: false,
              message: "Error retrieving data from the database",
            });
        }
    
        if (results.length === 0) {
          return res
            .status(404)
            .json({ success: false, message: "No devices found for the user" });
        }
        // If data is found, return success response with the result
        res.json({
          success: true,
          message: "Data retrieved successfully",
          result: results[0],
        });
      });

}
const GetTrip=(req,res)=>{
  console.log('its working');
  var device_id=req.query.device_id
  sql=`Select * from vehicleconnect_trips where device_id="${device_id}"`
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error executing SQL query:", err);
      return res
        .status(500)
        .json({
          success: false,
          message: "Error retrieving data from the database",
        });
    }

    if (results.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No devices found for the user" });
    }

    // If data is found, return success response with the result
    res.json({
      success: true,
      message: "Data retrieved successfully",
      result: results,
    });
  });
}
const DeviceTripData=(req,res)=>{
  var {fromDate,toDate}=req.query
 sql=`SELECT * FROM vehicleconnect_data WHERE dates BETWEEN "${fromDate}" AND "${toDate}"`
 db.query(sql, (err, results) => {
  if (err) {
    console.error("Error executing SQL query:", err);
    return res
      .status(500)
      .json({
        success: false,
        message: "Error retrieving data from the database",
      });
  }

  if (results.length === 0) {
    return res
      .status(404)
      .json({ success: false, message: "No devices found for the user" });
  }
  // If data is found, return success response with the result
  res.json({
    success: true,
    message: "Data retrieved successfully",
    result: results,
  });
});
}
const getTripASB=(req,res)=>{
  const {device_id,fromDate,toDate}=req.query
sql=`SELECT * FROM vehicleconnect_alerts WHERE dates BETWEEN "${fromDate}" AND "${toDate}" and device_id="${device_id}"`
db.query(sql, (err, results) => {
  if (err) {
    console.error("Error executing SQL query:", err);
    return res
      .status(500)
      .json({
        success: false,
        message: "Error retrieving data from the database",
      });
  }

  if (results.length === 0) {
    return res
      .status(404)
      .json({ success: false, message: "No devices found for the user" });
  }
  // If data is found, return success response with the result
  res.json({
    success: true,
    message: "Data retrieved successfully",
    result: results,
  });
});
}

const DeviceLocationData=(req,res)=>{
  var {fromDate,toDate,device_id}=req.query
 sql=`SELECT * FROM vehicleconnect_data WHERE dates BETWEEN "${fromDate}" AND "${toDate}" and device_id="${device_id}"`
 db.query(sql, (err, results) => {
  if (err) {
    console.error("Error executing SQL query:", err);
    return res
      .status(500)
      .json({
        success: false,
        message: "Error retrieving data from the database",
      });
  }

  if (results.length === 0) {
    return res
      .status(404)
      .json({ success: false, message: "No devices found for the user" });
  }
  // If data is found, return success response with the result
  res.json({
    success: true,
    message: "Data retrieved successfully",
    result: results,
  });
});
}
const DeviceLocationMarker=(req,res)=>{
  var {fromDate,toDate,device_id}=req.query
 sql=`SELECT * FROM vehicleconnect_alerts WHERE dates BETWEEN "${fromDate}" AND "${toDate}" and device_id="${device_id}"`
 db.query(sql, (err, results) => {
  if (err) {
    console.error("Error executing SQL query:", err);
    return res
      .status(500)
      .json({
        success: false,
        message: "Error retrieving data from the database",
      });
  }

  if (results.length === 0) {
    return res
      .status(404)
      .json({ success: false, message: "No devices found for the user" });
  }
  // If data is found, return success response with the result
  res.json({
    success: true,
    message: "Data retrieved successfully",
    result: results,
  });
});
}
const InsertDeviceAlerts=(req,res)=>{
  const {dates,device_id, alert_type, lattitude, longitude}=req.query
  const values = [device_id, alert_type, lattitude, longitude];
  sql="INSERT INTO vehicleconnect_alerts (dates,device_id, alert_type, lattitude, longitude) VALUES(Now(),?,?,?,?)"
  db.query(sql, values, (error, results, fields) => {
    if (error) {
      console.error('Error inserting data: ', error);
      res.status(500).send('Error inserting data');
      return;
    }
    console.log('Data inserted successfully');
    res.status(200).send('Data inserted successfully');
  });

}
const InsertDeviceTrips=(req,res)=>{
  const {dates, device_id, start_date, end_date, trip_id, start_lattitude, end_lattitude, start_longitude, end_longitude}=req.query
  const values = [device_id, start_date, end_date, trip_id, start_lattitude, end_lattitude, start_longitude, end_longitude];
  sql="INSERT INTO vehicleconnect_trips (dates, device_id, start_date, end_date, trip_id, start_lattitude, end_lattitude, start_longitude, end_longitude) VALUES(Now(),?,?,?,?,?,?,?,?)"
  db.query(sql, values, (error, results, fields) => {
    if (error) {
      console.error('Error inserting data: ', error);
      res.status(500).send('Error inserting data');
      return;
    }
    console.log('Data inserted successfully');
    res.status(200).send('Data inserted successfully');
  });

}
const InsertDeviceData=(req,res)=>{
  const {device_id, lattitude, longitude, distance, speed}=req.query
  const values = [device_id, lattitude, longitude, distance, speed];
  sql="INSERT INTO vehicleconnect_data (dates, device_id, lattitude, longitude, distance, speed) VALUES(Now(),?,?,?,?,?)"
  db.query(sql, values, (error, results, fields) => {
    if (error) {
      console.error('Error inserting data: ', error);
      res.status(500).send('Error inserting data');
      return;
    }
    console.log('Data inserted successfully');
    res.status(200).send('Data inserted successfully');
  });

}
const InsertDevice=(req,res)=>{
  const {user_id, device_id, device_type}=req.query
  const values = [user_id, device_id, device_type];
  sql="INSERT INTO vehicleconnect_devices (dates,user_id, device_id, device_type) VALUES(Now(),?,?,?)"
  db.query(sql, values, (error, results, fields) => {
    if (error) {
      console.error('Error inserting data: ', error);
      res.status(500).send('Error inserting data');
      return;
    }
    console.log('Data inserted successfully');
    res.status(200).send('Data inserted successfully');
  });
}
const DeleteDevice =(req,res)=>{
  const datesToDelete = req.query.dates;
   sql =`DELETE FROM vehicleconnect_devices WHERE dates="${datesToDelete}"`
  db.query(sql, (error, results, fields) => {
    if (error) {
      console.error('Error deleting data: ', error);
      res.status(500).send('Error deleting data');
      return;
    }
    console.log('Data deleted successfully');
    res.status(200).send('Data deleted successfully');
  });
}
const DeleteDeviceAlert=(req,res)=>{
  const datesToDelete = req.query.dates;
  sql =`DELETE FROM vehicleconnect_alerts WHERE dates="${datesToDelete}"`
 db.query(sql, (error, results, fields) => {
   if (error) {
     console.error('Error deleting data: ', error);
     res.status(500).send('Error deleting data');
     return;
   }
   console.log('Data deleted successfully');
   res.status(200).send('Data deleted successfully');
 });

}
const DeleteDeviceTrip=(req,res)=>{
  const datesToDelete = req.query.dates;
  sql =`DELETE FROM vehicleconnect_trips WHERE dates="${datesToDelete}"`
 db.query(sql, (error, results, fields) => {
   if (error) {
     console.error('Error deleting data: ', error);
     res.status(500).send('Error deleting data');
     return;
   }
   console.log('Data deleted successfully');
   res.status(200).send('Data deleted successfully');
 });

}
const  DeleteDeviceData=(req,res)=>{
  const datesToDelete = req.query.dates;
  sql =`DELETE FROM vehicleconnect_data WHERE dates="${datesToDelete}"`
 db.query(sql, (error, results, fields) => {
   if (error) {
     console.error('Error deleting data: ', error);
     res.status(500).send('Error deleting data');
     return;
   }
   console.log('Data deleted successfully');
   res.status(200).send('Data deleted successfully');
 });

}

module.exports = {
  GetDevice,
  leastDevice,
  GetTrip,
  DeviceTripData,
  getTripASB,
  DeviceLocationData,
  DeviceLocationMarker,
  InsertDeviceAlerts,
  InsertDeviceTrips,
  InsertDeviceData,
  InsertDevice,
  DeleteDeviceAlert,
     DeleteDeviceData,
     DeleteDeviceTrip,
     DeleteDevice
};
