<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AuthController extends AbstractController
{
    /** @var UserRepository $userRepository */
    private $usersRepository;

    /**
     * AuthController Constructor
     *
     * @param UserRepository $usersRepository
     */
    public function __construct(UserRepository $usersRepository)
    {
        $this->usersRepository = $usersRepository;
    }

    public function register(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        $newUserData['email'] = $data['email'];
        $newUserData['password'] = $data['password'];
        $newUserData['username'] = $data['username'];

        $user = $this->usersRepository->createNewUser($newUserData);

        return new Response(sprintf('User %s successfully created', $user->getUsername()));
    }
}
