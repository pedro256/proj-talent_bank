import {MigrationInterface, QueryRunner,TableColumn} from "typeorm";

export class refactoring1639072054055 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn(
            'users','company_id',
            new TableColumn({
                name:'company_id',
                type:'varchar',
                length:'145',
                isNullable:false
            })
        )
        await queryRunner.changeColumn(
            'users','default_phone',
            new TableColumn({
                name:'default_phone',
                type:'varchar',
                length:'145',
                isNullable:false
            })
        )
        await queryRunner.changeColumn(
            'users','whatsapp_phone',
            new TableColumn({
                name:'whatsapp_phone',
                type:'varchar',
                length:'145',
                default:"'0'"
            })
        )
        await queryRunner.changeColumn(
            'talents','default_phone',
            new TableColumn({
                name:'default_phone',
                type:'varchar',
                length:'145',
                isNullable:false
            })
        )
        await queryRunner.changeColumn(
            'talents','whatsapp_phone',
            new TableColumn({
                name:'whatsapp_phone',
                type:'varchar',
                length:'145',
                default:"'0'"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
