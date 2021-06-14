<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210614130652 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE show_time_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE ticket_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE "user_id_seq" INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE show_time (id INT NOT NULL, movie_id INT NOT NULL, date DATE NOT NULL, hour TIME(0) WITHOUT TIME ZONE NOT NULL, taken_seats JSON DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE ticket (id INT NOT NULL, show_time_id_id INT NOT NULL, user_id_id INT NOT NULL, show_time_id INT NOT NULL, seats VARCHAR(255) NOT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_97A0ADA334DD7B82 ON ticket (show_time_id_id)');
        $this->addSql('CREATE INDEX IDX_97A0ADA39D86650F ON ticket (user_id_id)');
        $this->addSql('CREATE TABLE "user" (id INT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, username VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D649E7927C74 ON "user" (email)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D649F85E0677 ON "user" (username)');
        $this->addSql('ALTER TABLE ticket ADD CONSTRAINT FK_97A0ADA334DD7B82 FOREIGN KEY (show_time_id_id) REFERENCES show_time (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE ticket ADD CONSTRAINT FK_97A0ADA39D86650F FOREIGN KEY (user_id_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE ticket DROP CONSTRAINT FK_97A0ADA334DD7B82');
        $this->addSql('ALTER TABLE ticket DROP CONSTRAINT FK_97A0ADA39D86650F');
        $this->addSql('DROP SEQUENCE show_time_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE ticket_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE "user_id_seq" CASCADE');
        $this->addSql('DROP TABLE show_time');
        $this->addSql('DROP TABLE ticket');
        $this->addSql('DROP TABLE "user"');
    }
}
