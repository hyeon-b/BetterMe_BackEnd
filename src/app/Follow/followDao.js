 // 1. 친구 전체 조회 
 async function selectAllFollowInfo(connection, follower) {
    const selectAllFollowInfoQuery = `
        SELECT follow.followee, UserTBL.nickName, UserTBL.photo, UserTBL.promise, follow.acceptedAt
        FROM UserTBL, follow
        WHERE UserTBL.userIdx = follow.followee
            AND follow.follower = ?
            AND follow.acceptStatus = 2;
        `;
    
    const [followInfoRows] = await connection.query(selectAllFollowInfoQuery, follower);

    return followInfoRows;
 }

  // 2. 친구 상세 조회
  async function selectFollowDetailInfo(connection, userIdx) {
    const selectFollowDetailInfoQuery = `
        SELECT userIdx, nickName, photo, promise
        FROM UserTBL
        WHERE userIdx = ?;
    `;
    
    const [followDetailInfoRows] = await connection.query(selectFollowDetailInfoQuery, userIdx);

    return followDetailInfoRows;
 }

 async function selectFollowDetailAwards(connection, followee) {
    const selectFollowDetailAwardsQuery = `
        SELECT habitName, contents, goodOrBad, emoge, createdAt
        FROM habit
        WHERE isAchieved = 1
            AND userIdx = ?;    
    `;
    
    const [followDetailAwardRows] = await connection.query(selectFollowDetailAwardsQuery, followee);

    return followDetailAwardRows;
 }

 // 3. 친구 검색
 async function selectSearchedFollows(connection, follower, nickName) {
    const searchNickname = `%${nickName}%`;
    const searchFollowParams = [follower, searchNickname];
    const selectSearchedFollowsQuery = `
        SELECT follow.followee, UserTBL.nickName, UserTBL.photo
        FROM UserTBL, follow
        WHERE UserTBL.userIdx = follow.followee
            AND follow.acceptStatus = 2
            AND follow.follower = ?
            AND UserTBL.nickName LIKE ?;
    `;

    const [searchedFollowRows] = await connection.query(selectSearchedFollowsQuery, searchFollowParams);

    return searchedFollowRows;
 }

  // 4. 추가할 친구 이메일 검색
  async function selectSearchedFollowEmail(connection, email) {
    const selectSearchedFollowEmailQuery = `
        SELECT userIdx, nickName, photo
        FROM UserTBL
        WHERE UserTBL.email = ?;
    `;
    
    const [followEmailRow] = await connection.query(selectSearchedFollowEmailQuery, email);

    return followEmailRow;
 }

 async function selectAcceptStatus(connection, follower, followee) {
    const acceptStatusParams = [follower, followee];
    const selectAcceptStatusEmailQuery = `
        SELECT acceptStatus
        FROM follow
        WHERE follower = ?
            AND followee = ?;
    `;
    
    const [acceptStatusEmailRow] = await connection.query(selectAcceptStatusEmailQuery, acceptStatusParams);

    return acceptStatusEmailRow;
 }

 // 별 개수 조회
 async function selectAllFollowStars(connection, userIdx) {
    const selectAllFollowStarsQuery = `
        SELECT count(if(isAchieved=1, 1, NULL)) stars
        FROM habit
        WHERE userIdx = ?;
    `;
    
    const [followStarRows] = await connection.query(selectAllFollowStarsQuery, userIdx);

    return followStarRows;
 }

 // 5. 친구 신청
 async function insertFollow(connection, userIdx, followee, acceptStatus) {
    const insertFollowParams = [userIdx, followee, acceptStatus];
    const insertFollowQuery = `
        INSERT INTO follow(follower, followee, acceptStatus) VALUES (?, ?, ?);
    `;

    const insertFollowRow = await connection.query(insertFollowQuery, insertFollowParams);

    return insertFollowRow;
 }

 // 6. 친구 신청 목록 조회
 async function selectFollowRequest(connection, follower) {
    const selectFollowRequestQuery = `
        SELECT UserTBL.userIdx, UserTBL.nickName, UserTBL.photo
        FROM UserTBL, follow
        WHERE UserTBL.userIdx = follow.followee
            AND follow.follower = ?
            AND follow.acceptStatus = 1;
    `;
    
    const [followRequestRows] = await connection.query(selectFollowRequestQuery, follower);

    return followRequestRows;
 }

 // 7. 친구 신청 수락
 async function updateAcceptStatus(connection, follower, followee) {
    const updateAcceptStatusParams = [follower, followee];
    const updateAcceptStatusQuery = `
        UPDATE follow SET acceptStatus = 2
        WHERE follower = ?
            AND followee = ?;
    `;
    
    const followRequestRow = await connection.query(updateAcceptStatusQuery, updateAcceptStatusParams);

    return followRequestRow;
 }

 // 8. 친구 신청 거절 or 친구 삭제
 async function deleteFollows(connection, follower, followee) {
    const deleteFollowsParams = [follower, followee];
    const deleteFollowsQuery = `
        DELETE FROM follow
        WHERE follower = ?
            AND followee = ?;
    `;
    
    const [deletedFollowsRows] = await connection.query(deleteFollowsQuery, deleteFollowsParams);

    return deletedFollowsRows;
 }


 module.exports = {
    selectAllFollowInfo,
    selectAllFollowStars,
    selectFollowDetailInfo,
    selectFollowDetailAwards,
    selectSearchedFollows,
    selectSearchedFollowEmail,
    selectAcceptStatus,
    insertFollow,
    selectFollowRequest,
    updateAcceptStatus,
    deleteFollows,
 };