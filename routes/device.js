

const { GetDevice, leastDevice,GetTrip, DeviceTripData, getTripASB, DeviceLocationData,
    DeviceLocationMarker,InsertDeviceAlerts, InsertDeviceTrips, InsertDeviceData,
     InsertDevice
     ,DeleteDeviceAlert,
     DeleteDeviceData,
     DeleteDeviceTrip,
     DeleteDevice   } = require('../controllers/deviceController')

const router=require('express').Router()

router.get('/getDeviceInfo',GetDevice)
router.get('/getDeviceLeastOne',leastDevice)
router.get('/getDeviceTrip',GetTrip)
router.get('/getDeviceTripData',DeviceTripData)
router.get('/getDeviceTripDetail',getTripASB)
router.get('/getDeviceLocationDetails',DeviceLocationData)
router.get('/getDeviceLocationMarker',DeviceLocationMarker)
router.post('/InsertDeviceAlert',InsertDeviceAlerts)
router.post('/InsertDeviceData',InsertDeviceData)
router.post('/InsertDeviceTrip',InsertDeviceTrips)
router.post('/InsertDevice',InsertDevice)
router.post('/DeleteDeviceAlert',DeleteDeviceAlert)
router.post('/DeleteDeviceData',DeleteDeviceData)
router.post('/DeleteDeviceTrip',DeleteDeviceTrip)
router.post('/DeleteDevice',DeleteDevice)


// router.get('')

module.exports=router