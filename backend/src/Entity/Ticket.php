<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\TicketRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=TicketRepository::class)
 * @ApiResource()
 */
class Ticket
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $showTimeId;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $seats;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\ManyToOne(targetEntity=ShowTime::class, inversedBy="tickets")
     * @ORM\JoinColumn(nullable=false)
     */
    private $ShowTimeId;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="ticketsId")
     * @ORM\JoinColumn(nullable=false)
     */
    private $userId;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getShowTimeId(): ?int
    {
        return $this->showTimeId;
    }

    public function setShowTimeId(int $showTimeId): self
    {
        $this->showTimeId = $showTimeId;

        return $this;
    }

    public function getSeats(): ?string
    {
        return $this->seats;
    }

    public function setSeats(string $seats): self
    {
        $this->seats = $seats;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUserId(): ?User
    {
        return $this->userId;
    }

    public function setUserId(?User $userId): self
    {
        $this->userId = $userId;

        return $this;
    }
}
