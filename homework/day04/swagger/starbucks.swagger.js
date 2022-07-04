/**
 * @swagger
 * /starbucks:
 *  get:
 *      summary: 스타벅스 커피종류
 *      tags: [Starbucks]
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
 *                                    name:
 *                                      type: string
 *                                      example: "아메리카노"
 *                                    kcal:
 *                                      type: number
 *                                      example: 20
 */

/**
 * @swagger
 * /starbucks:
 *  post:
 *    summary : 스벅 커피 등록하기
 *    responses:
 *      200:
 *        description: 성공
 */
