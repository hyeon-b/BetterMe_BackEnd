async function allAlarmOn(connection,userId){
    const allAlarmOnQuery= `
    UPDATE notification
    SET habitCheck_alarm = 'ON',habitInvite_alarm = 'ON', friendRequest_alarm = 'ON', friendAward_alarm = 'ON'
    WHERE userIdx = ?;`;

    const updateAllAlarmOn = await connection.query(allAlarmOnQuery,userId);
    return updateAllAlarmOn;

}

async function allAlarmOff(connection,userId){
    const allAlarmOffQuery= `
    UPDATE notification
    SET habitCheck_alarm = 'OFF',habitInvite_alarm = 'OFF', friendRequest_alarm = 'OFF', friendAward_alarm = 'OFF'
    WHERE userIdx = ?;`;

    const updateAllAlarmOff = await connection.query(allAlarmOffQuery,userId);
    return updateAllAlarmOff;

}

async function habitCheckAlarmOn(connection,userId){

    const habitCheckAlarmOnQuery= `
    UPDATE notification
    SET habitCheck_alarm = 'ON'
    WHERE userIdx = ?;`;

    const updateHabitCheckAlarmOn = await connection.query(habitCheckAlarmOnQuery,userId);
    return updateHabitCheckAlarmOn;
}

async function habitCheckAlarmOff(connection,userId){

    const habitCheckAlarmOffQuery= `
    UPDATE notification
    SET habitCheck_alarm = 'OFF'
    WHERE userIdx = ?;`;

    const updateHabitCheckAlarmOff = await connection.query(habitCheckAlarmOffQuery,userId);
    return updateHabitCheckAlarmOff;
}

async function habitInviteAlarmOn(connection,userId){

    const habitInviteAlarmOnQuery= `
    UPDATE notification
    SET habitInvite_alarm = 'ON'
    WHERE userIdx = ?;`;

    const updateHabitInviteAlarmOn = await connection.query(habitInviteAlarmOnQuery,userId);
    return updateHabitInviteAlarmOn;
}

async function habitInviteAlarmOff(connection,userId){

    const habitInviteAlarmOffQuery= `
    UPDATE notification
    SET habitInvite_alarm = 'OFF'
    WHERE userIdx = ?;`;

    const updateHabitInviteAlarmOff = await connection.query(habitInviteAlarmOffQuery,userId);
    return updateHabitInviteAlarmOff;
}

async function friendRequestAlarmOn(connection,userId){

    const friendRequestAlarmOnQuery= `
    UPDATE notification
    SET friendRequest_alarm = 'ON'
    WHERE userIdx = ?;`;

    const updateFriendRequestAlarmOn = await connection.query(friendRequestAlarmOnQuery,userId);
    return updateFriendRequestAlarmOn;
}

async function friendRequestAlarmOff(connection,userId){

    const friendRequestAlarmOffQuery= `
    UPDATE notification
    SET friendRequest_alarm = 'OFF'
    WHERE userIdx = ?;`;

    const updateFriendRequestAlarmOff = await connection.query(friendRequestAlarmOffQuery,userId);
    return updateFriendRequestAlarmOff;
}

async function friendAwardAlarmOn(connection,userId){

    const friendAwardAlarmOnQuery= `
    UPDATE notification
    SET friendAward_alarm = 'ON'
    WHERE userIdx = ?;`;

    const updateFriendAwardAlarmOn = await connection.query(friendAwardAlarmOnQuery,userId);
    return updateFriendAwardAlarmOn;
}

async function friendAwardAlarmOff(connection,userId){

    const friendAwardAlarmOffQuery= `
    UPDATE notification
    SET friendAward_alarm = 'OFF'
    WHERE userIdx = ?;`;

    const updateFriendAwardAlarmOff = await connection.query(friendAwardAlarmOffQuery,userId);
    return updateFriendAwardAlarmOff;
}

async function selectAlarm(connection,userId){

    const selectAlarmQuery = `
    SELECT habitCheck_alarm,habitInvite_alarm,friendRequest_alarm,friendAward_alarm,habitCheck_time 
    FROM notification
    WHERE userIdx = ?;
    `;
    const selectAlarm = await connection.query(selectAlarmQuery,userId);
    return selectAlarm;
}
module.exports={
    allAlarmOn,
    allAlarmOff,
    habitCheckAlarmOn,
    habitCheckAlarmOff,
    habitInviteAlarmOn,
    habitInviteAlarmOff,
    friendRequestAlarmOn,
    friendRequestAlarmOff,
    friendAwardAlarmOn,
    friendAwardAlarmOff,
    selectAlarm,
};