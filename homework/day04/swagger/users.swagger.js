/**
 * @swagger
 * /boards:
 *   get:
 *      summary: 유저목록 가져오기
 *      tags: [Users]
 *      parameters:
 *          - in: query
 *            name: number
 *            type: int
 *      responses:
 *          200:
 *              description: 성공
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              properties:
 *                                   email:
 *                                      type: stirng
 *                                      example: aaa@aaa.com
 *                                   name:
 *                                      type: string
 *                                      example: 철수
 *                                   phone:
 *                                      type: string
 *                                      example: 01093339333
 *                                   personal:
 *                                      type: string
 *                                      example: "111111-111111"
 *                                   prefer:
 *                                      type: string
 *                                      example: "https://naver.com"
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary : 유저 등록하기
 *     responses:
 *       200:
 *         description: 성공
 */
