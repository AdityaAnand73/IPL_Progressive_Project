package com.wecp.progressive.service.impl;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import com.wecp.progressive.entity.Team;
import com.wecp.progressive.service.TeamService;

public class TeamServiceImplArraylist implements TeamService {

    List<Team> teams = new ArrayList<>();

    @Override
    public List<Team> getAllTeams() {
        return teams;
    }

    @Override
    public int addTeam(Team team) {
        teams.add(team);
        return teams.size();
    }

    @Override
    public List<Team> getAllTeamsSortedByName() {
        List<Team> t = teams;
        t.sort(Comparator.comparing(Team::getTeam_name));
        Collections.sort(t);
        return t;
    }

    public void emptyArrayList(){
        teams = new ArrayList<>();
    }

}