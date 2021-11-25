import {MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm";

export class base1637627941198 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'users',
                columns:[
                    {
                        name:'id',
                        type:'int4',
                        isPrimary:true,
                        isGenerated:true,
                        generationStrategy:'increment'
                    },
                    {
                        name:'name',
                        type:'varchar',
                        length:'145',
                        isNullable:false
                    },
                    {
                        name:"company_id",
                        type:'int4',
                        default:'0'
                    },
                    {
                        name:'company_email',
                        type:'varchar',
                        default:"''"
                    },
                    {
                        name:'password',
                        type:'varchar',
                        length:'245',
                        isNullable:false
                    },
                    {
                        name:'default_phone',
                        type:'int4',
                        default:'0'
                    },
                    {

                        name:'whatsapp_phone',
                        type:'int4',
                        default:'0'
                    },
                    {
                        name:'type',
                        type:'enum',
                        enum:['recruiter','admin'],
                        default:"'recruiter'"
                    }
                    ,
                    {
                        default: 'now()',
                        name: 'created_at',
                        type: 'timestamp',
                    }, {
                        default: 'now()',
                        name: 'updated_at',
                        type: 'timestamp',
                    },
                ],
            })
        )
        await queryRunner.createTable(
            new Table({
                name:'talents',
                columns:[
                    {
                        name:'id',
                        type:'int4',
                        isPrimary:true,
                        isGenerated:true,
                        generationStrategy:'increment'
                    },
                    {
                        name:'name',
                        type:'varchar',
                        length:'245',
                        isNullable:false
                    },
                    {
                        name:"description",
                        type:'text',
                        default:"''"
                    },
                    {
                        name:'default_phone',
                        type:'int4',
                        default:'0'
                    },
                    {

                        name:'whatsapp_phone',
                        type:'int4',
                        default:'0'
                    },
                    {
                        name:"default_email",
                        type:"varchar",
                        length:"145",
                        default:"''"
                    },
                    {
                        name:"second_email",
                        type:"varchar",
                        length:"145",
                        default:"''"
                    },
                    {
                        name:'address',
                        type:'text',
                        default:"''"
                    },
                    {
                        name:'birth_date',
                        type:'date',
                        isNullable:false
                    },
                    {
                        name:'create_by_user',
                        type:'int4',
                        isNullable:false
                    },
                    {
                        default: 'now()',
                        name: 'created_at',
                        type: 'timestamp',
                    }, {
                        default: 'now()',
                        name: 'updated_at',
                        type: 'timestamp',
                    }
                ],
                foreignKeys:[
                    new TableForeignKey({
                        columnNames:['create_by_user'],
                        referencedTableName:'users',
                        referencedColumnNames:['id']
                    })
                ]
            })
        )
        await queryRunner.createTable(
            new Table({
                name:'skills',
                columns:[
                    {
                        name:'id',
                        type:'int4',
                        isPrimary:true,
                        isGenerated:true,
                        generationStrategy:'increment'
                    },
                    {
                        name:'name',
                        type:'varchar',
                        length:'245',
                        isNullable:false
                    },
                    {
                        name:"description",
                        type:'text',
                        default:"''"
                    },
                    {
                        name:'create_by_user',
                        type:'int4',
                        isNullable:false
                    },
                    {
                        default: 'now()',
                        name: 'created_at',
                        type: 'timestamp',
                    }, {
                        default: 'now()',
                        name: 'updated_at',
                        type: 'timestamp',
                    }
                ],
                foreignKeys:[
                    new TableForeignKey({
                        columnNames:['create_by_user'],
                        referencedTableName:'users',
                        referencedColumnNames:['id']
                    })
                ]
            })
        )
        await queryRunner.createTable(
            new Table({
                name:'talent_skills',
                columns:[
                    {
                        name:'id',
                        type:'int4',
                        isPrimary:true,
                        isGenerated:true,
                        generationStrategy:'increment'
                    },
                    {
                        name:'talent_id',
                        type:'int4',
                        isNullable:false
                    },
                    {
                        name:'skill_id',
                        type:'int4',
                        isNullable:false
                    },
                    {
                        name:'time_experience',
                        type:'int4',
                        default:'0',
                        isNullable:false
                    },
                    {
                        name:"description",
                        type:'text',
                        default:"''"
                    },
                    {
                        name:"extra",
                        type:'text',
                        default:"''"
                    },
                    {
                        default: 'now()',
                        name: 'created_at',
                        type: 'timestamp',
                    }, {
                        default: 'now()',
                        name: 'updated_at',
                        type: 'timestamp',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE IF EXISTS talent_skills')
        await queryRunner.query('DROP TABLE IF EXISTS talents')
        await queryRunner.query('DROP TABLE IF EXISTS skills')
        await queryRunner.query('DROP TABLE IF EXISTS users')
    }

}
