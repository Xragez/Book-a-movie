<?php

namespace App\Repository;

use App\Entity\ShowTime;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ShowTime|null find($id, $lockMode = null, $lockVersion = null)
 * @method ShowTime|null findOneBy(array $criteria, array $orderBy = null)
 * @method ShowTime[]    findAll()
 * @method ShowTime[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ShowTimeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ShowTime::class);
    }
    // /**
    //  * @return ShowTime[] Returns an array of ShowTime objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ShowTime
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
