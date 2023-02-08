const {pool} = require("../../../config/database");
const alarmDao = require("../Alarm/alarmDao");
const {response} = require("../../../config/response");
const {errResponse} = require("../../../config/response");
const baseResponse = require("../../../config/baseResponseStatus");
const {logger} = require("../../../config/winston");
const habitDao = require("../Habit/habitDao");

exports.allAlarmOn = async function(userIdx){

    try {

        const connection = await pool.getConnection(async (conn) => conn);

        const allAlarmOnResponseResult = await alarmDao.allAlarmOn(connection, userIdx);

        connection.release();
        return response(baseResponse.ALL_ALARM_ON_SUCCESS);

    }catch(err){
        logger.error(`App - rejectInviteHabit Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
}

exports.allAlarmOff = async function(userIdx){

    try {

        const connection = await pool.getConnection(async (conn) => conn);

        const allAlarmOnResponseResult = await alarmDao.allAlarmOff(connection, userIdx);

        connection.release();
        return response(baseResponse.ALL_ALARM_OFF_SUCCESS);

    }catch(err){
        logger.error(`App - rejectInviteHabit Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
}

exports.habitCheckAlarmOn = async function(userIdx){

    try{

        const connection = await pool.getConnection(async (conn) => conn);

        const habitCheckAlarmOnResponseResult = await alarmDao.habitCheckAlarmOn(connection, userIdx);

        connection.release();
        return response(baseResponse.HABIT_CHECK_ALARM_ON_SUCCESS);

    }catch(err){
        logger.error(`App - rejectInviteHabit Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
}

exports.habitCheckAlarmOff = async function(userIdx){

    try{

        const connection = await pool.getConnection(async (conn) => conn);

        const habitCheckAlarmOffResponseResult = await alarmDao.habitCheckAlarmOff(connection, userIdx);

        connection.release();
        return response(baseResponse.HABIT_CHECK_ALARM_OFF_SUCCESS);

    }catch(err){
        logger.error(`App - rejectInviteHabit Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
}

exports.habitInviteAlarmOn = async function(userIdx){

    try{

        const connection = await pool.getConnection(async (conn) => conn);

        const habitInviteAlarmOnResponseResult = await alarmDao.habitInviteAlarmOn(connection, userIdx);

        connection.release();
        return response(baseResponse.HABIT_INVITE_ALARM_ON_SUCCESS);

    }catch(err){
        logger.error(`App - rejectInviteHabit Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
}

exports.habitInviteAlarmOff = async function(userIdx){

    try{

        const connection = await pool.getConnection(async (conn) => conn);

        const habitInviteAlarmOffResponseResult = await alarmDao.habitInviteAlarmOff(connection, userIdx);

        connection.release();
        return response(baseResponse.HABIT_INVITE_ALARM_OFF_SUCCESS);

    }catch(err){
        logger.error(`App - rejectInviteHabit Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
}

exports.friendRequestAlarmOn = async function(userIdx){

    try{

        const connection = await pool.getConnection(async (conn) => conn);

        const friendRequestAlarmOnResponseResult = await alarmDao.friendRequestAlarmOn(connection, userIdx);

        connection.release();
        return response(baseResponse.FRIEND_REQUEST_ON_SUCCESS);

    }catch(err){
        logger.error(`App - rejectInviteHabit Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
}

exports.friendRequestAlarmOff = async function(userIdx){

    try{

        const connection = await pool.getConnection(async (conn) => conn);

        const friendRequestAlarmOffResponseResult = await alarmDao.friendRequestAlarmOff(connection, userIdx);

        connection.release();
        return response(baseResponse.FRIEND_REQUEST_OFF_SUCCESS);

    }catch(err){
        logger.error(`App - rejectInviteHabit Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
}