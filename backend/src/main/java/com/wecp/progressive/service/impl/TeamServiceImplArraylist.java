package com.wecp.progressive.service.impl;

import java.util.ArrayList;
// import java.util.Collection;
// import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import org.springframework.stereotype.Service;

import com.wecp.progressive.entity.Team;
import com.wecp.progressive.service.TeamService;
@Service
public class TeamServiceImplArraylist implements TeamService {

    private static List<Team> teamList = new ArrayList<>();


    @Override
    public List<Team> getAllTeams() {
        return teamList;
    }

    @Override
    public int addTeam(Team team) {
        teamList.add(team);
        return teamList.size();
    }

    @Override
    public List<Team> getAllTeamsSortedByName() {
        List<Team> sortedTeam = teamList;
        sortedTeam.sort(Comparator.comparing(Team::getTeamName));
        //Collections.sort(t);
        return sortedTeam;
    }

    @Override
    public void emptyArrayList(){
        teamList = new ArrayList<>();
    }

}