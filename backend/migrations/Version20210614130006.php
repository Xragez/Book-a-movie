<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210614130006 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE show_time ALTER taken_seats TYPE JSON');
        $this->addSql('ALTER TABLE show_time ALTER taken_seats DROP DEFAULT');
        $this->addSql('COMMENT ON COLUMN show_time.taken_seats IS NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE show_time ALTER taken_seats TYPE TEXT');
        $this->addSql('ALTER TABLE show_time ALTER taken_seats DROP DEFAULT');
        $this->addSql('COMMENT ON COLUMN show_time.taken_seats IS \'(DC2Type:array)\'');
    }
}
